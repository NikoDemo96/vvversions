import {
  showLoadingNotification,
  showNotification,
} from "../utils/toastifyNotifications";
import { todayDate } from "../utils/todaydate";
import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      token: localStorage.getItem("token") || null,
      artistName: localStorage.getItem("artistName") || "",
      username: localStorage.getItem("username") || "",
      comments: [],
      song: [],
      projects: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getSong: async (song_id) => {
        const store = getStore();

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/songs/${song_id}`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          const data = await response.json();
          console.log(data.songs);

          setStore({ song: data.songs });

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      addComments: async (commentBody, song_id) => {
        const store = getStore();
        const actions = getActions();

        console.log(commentBody);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.token}`,
          },
          body: JSON.stringify(commentBody),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/comments/${song_id}`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            showNotification("error", error.message);
            throw new Error(error.message);
          }
          const data = await response.json();
          console.log(data);

          setStore({ comments: data });
          actions.getComments(song_id);
          showNotification("success", "Comment posted");
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      getComments: async (song_id) => {
        const store = getStore();

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/comments/${song_id}`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          const data = await response.json();
          console.log(data);

          setStore({ comments: data });

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      loginFirst: async (data) => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/user/login`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            toast.error(error.msg);
            throw new Error(error.message);
          }
          const data = await response.json();
          console.log(data);
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("artistName", data.artist_name);
          localStorage.setItem("username", data.username);

          setStore({ token: data.access_token });
          setStore({ artistName: data.artist_name });
          setStore({ username: data.username });

          showNotification("success", "Successful Login");
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      registerFunction: async (data) => {
        console.log(data);
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/user`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            toast.error(error.msg);
            throw new Error(error.message);
          }
          toast.success("Username created");
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("artistName");
        localStorage.removeItem("username");
        setStore({ token: null });
        setStore({ artistName: "" });
        setStore({ username: "" });
        showNotification("info", "Successful Logout");
        return true;
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      isLogin: () => {
        const store = getStore();
        setStore({
          ...store,
          isLogin: true,
        });
      },

      createSong: async (data, project_id) => {
        console.log(data, project_id);
        console.log(data.soundfile[0]);
        const store = getStore();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("artist", data.artist);
        formData.append("description", data.description);
        formData.append("gender", data.gender);
        formData.append("version_date", todayDate());
        formData.append("song", data.soundfile[0]);
        formData.append("cover", data.imagefile[0]);
        const options = {
          method: "POST",
          headers: {
            authorization: `Bearer ${store.token}`,
          },
          body: formData,
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/songs/${project_id}`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            showLoadingNotification(response);
            throw new Error(error.message);
          }
          showLoadingNotification(response);
          getActions().getProject();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      getProject: async () => {
        const store = getStore();

        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/projects`,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${store.token}`,
              },
            }
          );
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          let projects = [];
          for (let project of data.projects) {
            console.log(project);
            const songResponse = await fetch(
              `${process.env.BACKEND_URL}/api/songs/${project.id}`,
              {
                headers: {
                  authorization: `Bearer ${store.token}`,
                },
              }
            );
            const songData = await songResponse.json();
            projects.push({ ...project, songs: songData.songs });
          }
          setStore({ ...store, projects: projects });
          console.log(projects);
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      createProject: async (data) => {
        console.log(data);
        toast.info("Creating project");
        const store = getStore();
        const body = { ...data, version: 1, version_date: todayDate() };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${store.token}`,
          },
          body: JSON.stringify(body),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/projects`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            toast.error(error.msg);
            throw new Error(error.message);
          }
          getActions().getProject();
          toast.success("Project created");
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      createVersion: async (id) => {
        const store = getStore();
        const body = { version_date: todayDate() };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${store.token}`,
          },
          body: JSON.stringify(body),
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/project/${id}`,
            options
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          getActions().getProject();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      deleteProject: async (id) => {
        const store = getStore();
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/project/${id}`,
            options
          );
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          getActions().getProject();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      deleteSong: async (id) => {
        const store = getStore();
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/songs/${id}`,
            options
          );
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          getActions().getProject();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      deleteComment: async (comment_id, song_id) => {
        const store = getStore();
        const options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${store.token}`,
          },
        };
        try {
          const response = await fetch(
            `${process.env.BACKEND_URL}/api/comments/${comment_id}`,
            options
          );
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
          }
          getActions().getComments(song_id);
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },

      cleanComments: () => {
        const store = getStore();
        setStore({ ...store, comments: [] });
      },
    },
  };
};

export default getState;
