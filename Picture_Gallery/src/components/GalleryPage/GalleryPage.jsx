import { useEffect, useState } from "react";
import PicCard from "../PicCard/PicCard";
import axios from 'axios';
import "./galleryPage.css"


function GalleryPage(){
    const [more, setMore] = useState(16)

        const ULR_PIC_GALLERY = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=${more}`;

        const [idUrlobj, SetidUrlobj] = useState([]);
        const [Loader, SetLoader] = useState(true);
        

        async function DownloadPics(){
            const res = await axios.get(ULR_PIC_GALLERY);
            console.log("res: ", res);
            const photosDetails = res.data.photos;
            console.log("photosDetails: ", photosDetails);

            const utl_Id_Object = photosDetails.map((keys)=>{

                return {
                    id: keys.id,
                    url : keys.url
                }
            });
            console.log("utl_Id_Object: ", utl_Id_Object);

            SetidUrlobj(utl_Id_Object);
            SetLoader(false);
            

        }





        useEffect(()=>{
            DownloadPics()},
        []);


    return(
    <div className="main-galleryPage">
        <div className="pictures-div">
            {(Loader) ? "Loading..." : idUrlobj.map((p)=><PicCard id={p.id} url={p.url}/>) }
        </div>

        {(Loader) ? "" : <div className="Buttons">
                                        <button onClick={() => setMore(more+16)}>Load more</button>
                                        <button onClick={() => setMore(more-16)}>Load less</button>
                                    </div>
        }
    </div>
    )
}


export default GalleryPage;