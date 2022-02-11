
import { Navbar } from './NavBar';
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
        <Navbar />
   </div>
   
    </>  
  
)

}

export {Begin}