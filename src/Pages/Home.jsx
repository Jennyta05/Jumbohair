import { Begin } from "../components/Begin";
import { Cards } from "../components/Cards";
import Menu from "../images/img/Menu.png";
import '../Styles/begin.css';
import '../Styles/card.css';


function Home ({cardData, setCardData}){


    return(
      <>
      <div>
           <Begin/>
       </div> 
       <div className='welcome'>
             <h2 className='well'>
             Bienvenida a Jumbo hair la mejor tienda de moñas Scrunchies en Facatativá
             </h2>
        </div>
                           { /* this is the icon */}
        <div><i className="fas fa-search" id="search"></i></div>
       
        <div id="ctn-bars-search"> 
            <input type="text" className="searchBox" placeholder="¿Que estas buscando?" />
       </div>
       <div>
         <h2 className="title">Productos</h2>
        <Cards
        cardData={cardData}
        setCardData={setCardData}
        />

       </div>

       
       
      {/*  <div className="footer"></div> */}

     
        </>
    )
    
}

export {Home}