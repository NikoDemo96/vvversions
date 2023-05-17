import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { ToastContainer } from "react-toastify";

import { Home } from "./pages/home";
import { Register } from "./pages/register.jsx";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Main } from "./pages/main.jsx";
import { About } from "./pages/about.jsx";

import { Navbar } from "./component/navbar";
import Login from "./pages/login";
import { AddSong } from "./pages/addsong.jsx";
import { SongRevision } from "./pages/SongRevision.jsx";
import { ProjectInput } from "./pages/projectinput.jsx";
import {  Revisions } from "./pages/revisions.jsx";
import 'react-toastify/dist/ReactToastify.css';


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                <ToastContainer />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Register />} path='/register' />
                        <Route element={<Login />} path='/user/login' />
                        <Route element={<About />} path="/about" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Main />} path="/main" />
                        <Route element={<AddSong />} path="/addsong/:id" />
                        <Route element={<SongRevision/>} path="/songrevision/:projectid/:songid"/>
                        <Route element={<ProjectInput />} path="/projectinput" />
                        <Route element={<Revisions />} path="/revisions/:id" />

                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
