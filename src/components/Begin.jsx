/*Aqui iran el fondo de madera y el logo.
Se tiene que importar a la pagina de producto individual
*/
import Maderarosa from '../images/img/Maderarosa.jpg';
import Ellipse1 from '../images/img/Ellipse1.png';
import '../Styles/begin.css';


function Begin(){
return(
   <>
   <div >
       <div className='table' >
             <img className='wood' src={Maderarosa} alt='pinkwood'/>

        </div>
       <div className='girl'>
             <img className='logo' src={Ellipse1} alt='this is the logo'/>
        </div>
        <div className='welcome'>
             <h2 className='well'>
             Bienvenida a Jumbo hair la mejor tienda de moñas Scrunchies en Facatativá
             </h2>
        </div>
   </div>
   
    </>  
  
)

}

export {Begin}