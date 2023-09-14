import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetails.css";

function CardDetails(){

    const {id} = useParams();
    const [picDetails, setPicDetails] = useState({});



    async function downloadDetails(){

        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        console.log(response)


        setPicDetails({
            dis : response.data.photo.description,
            image : response.data.photo.url,
            title: response.data.photo.title
        })

    }
    console.log("pics->",picDetails);
    useEffect(()=>{downloadDetails();}, [])


    return (

        <div className="main-div">
            <div className="container">
                <div className="image-div">
                    <img src={picDetails.image} alt="" />
                </div>
                <div className="right-div">
                    <h1 className="title">{picDetails.title} </h1>
                    <p className="discription">{picDetails.dis}</p>
                </div>
            </div>

        </div>
    )
}
export default CardDetails;