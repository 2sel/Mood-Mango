import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../pages/Main";
import Moods from "../pages/Moods";
import Rank from "../pages/Rank";
import Mypage from "../pages/Mypage";
import { moodStorage } from "../components/common/MoodStorage";
import Musicplayer from "../components/Rank/Musicplayer";
import Search from '../pages/Search';

const Routers = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Moods />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='/rank' element={<Rank />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
                <Musicplayer></Musicplayer>
            </Layout>
        </BrowserRouter>
    );
};

export default Routers;
