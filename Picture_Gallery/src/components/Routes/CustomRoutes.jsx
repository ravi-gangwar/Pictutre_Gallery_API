import {Route, Routes } from "react-router-dom";
import GalleryPage from "../GalleryPage/GalleryPage";


function CustomRoutes(){



    return (
        <Routes>
            <Route path="/" element={<GalleryPage/>}/>
        </Routes>
    )
    
}

export default CustomRoutes;