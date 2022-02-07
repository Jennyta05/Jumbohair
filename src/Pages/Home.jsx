import { Begin } from "../components/Begin";
import '../Styles/begin.css';


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

        <div><i class="fas fa-search" id="search"></i></div>
       
        <div id="ctn-bars-search"> 
            <input type="text" className="searchBox" placeholder="¿Que estas buscando?" />
       </div>


       <ul>
         <li> <a href="#"><i class="fas fa-search"></i>  LILA</a></li>
         <li> <a href="#"><i class="fas fa-search"></i>  ROJA</a></li>
         <li> <a href="#"><i class="fas fa-search"></i>  LILA CLARA</a></li>
         <li> <a href="#"><i class="fas fa-search"></i>  ROJA FLORES</a></li>
         <li> <a href="#"><i class="fas fa-search"></i>  BLANCA</a></li>
         
       </ul>
     
        </>
    )
    
}

export {Home}