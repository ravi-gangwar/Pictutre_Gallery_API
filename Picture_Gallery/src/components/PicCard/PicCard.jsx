import { Link } from "react-router-dom"
import "./picCard.css"


function PicCard({url, id}){

    return (
        <div className="main-card">
            <Link to={`/picture/${id}`}>
            <div className="Card">
                <img src={url} key= {id} alt="" />
            </div>
            </Link>
        </div>
        
    )
}

export default PicCard;