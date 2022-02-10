import '../Styles/card.css'
import Info from "../Apis/indiv"

function Card(){
    return(
      <>
      <div>
            <img src={Info.image} alt=" image's product" />
        </div>
        <div className="card-info">
            <h3>{Info.name}</h3>
            <p>{Info.price}</p>
        </div>
     </>
    )
}




export {Card}
