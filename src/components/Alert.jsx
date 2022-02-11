import '../Styles/card.css'
import swal from "sweetalert";


function Alert({cardData, setCardData, article}){
    
    
    const showAlert=() =>{
        swal({
            title:"Ha sido agregado a tu carrito",
            button:"Continuar", 
        
        });
        setCardData(dataCart => [...dataCart, article] );
    }

    console.log(cardData)
    return(
    <div>
       <button className="addCart" onClick={() => showAlert()}>Añadir</button>
    </div>

    );
}

export {Alert}