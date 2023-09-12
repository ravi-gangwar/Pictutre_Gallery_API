import "./picCard.css"


function PicCard({url, id}){

    return (
        <div className="main-card">
            <div className="Card">
                <img src={url} key= {id} alt="" />
            </div>
        </div>
        
    )
}

export default PicCard;