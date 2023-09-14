import {Route, Routes } from "react-router-dom";
import GalleryPage from "../GalleryPage/GalleryPage";
import CardDetails from "../CardDetails/CardDetails";


function CustomRoutes(){



    return (
        <Routes>
            <Route path="/" element={<GalleryPage/>}/>
            <Route path="/picture/:id" element={<CardDetails/>}/>
        </Routes>
    )
    
}

export default CustomRoutes;