import { Begin } from "../components/Begin";
import lila from '../images/img/lila.jpeg'
import '../Styles/begin.css';
import '../Styles/card.css';


function Home (){


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
        
       </div>

       <div className="card-product">
         <img className="card-img" src={lila} alt="image" />
         <div className="card-info">
         <h2>moña lila</h2>
         <p>7000</p>
       </div>
        
        </div>
       
       
      {/*  <div className="footer"></div> */}

     
        </>
    )
    
}

export {Home}