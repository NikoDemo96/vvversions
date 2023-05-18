import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import ProyectRevision from "../component/ProyectRevision.jsx";
import VVVERSIONSLOGONEGRO from "../../img/VVVERSIONSLOGONEGRO.png";
import { Link, useParams } from "react-router-dom";


export const SongRevision = () => {
  const { store } = useContext(Context);
  const {projectid, songid} = useParams();
  const [song, setSong] = useState({});
  useEffect(()=> {
    const getSongById = async(song_id) => {
      const response = await fetch(`${process.env.BACKEND_URL}/api/song-byid/${song_id}`, {
        headers: {
          "Authorization": `Bearer ${store.token}`,
        }
      })
      if (response.ok) {
        const body = await response.json()
        setSong(body.result)
      }
    }
    getSongById(songid)
  },[])

  return (
    <div className="p-5 text-end">
      <h4><i>{store.artistName}</i></h4>
      <h2 className="me-2">{song.title}</h2>
      
      <ProyectRevision />


      <div className="text-center">
        <img src={VVVERSIONSLOGONEGRO} className="col-2"></img>
        <div className="col-4">
          <Link to={`/revisions/${projectid}`}>
            <p className="back2 p-2 ">back to revisions</p>
          </Link>
        </div>  
      </div>
    </div>
  );
};