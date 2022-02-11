import React, { useState } from 'react';
import { Begin } from "../components/Begin";
import '../Styles/shoppingCart.css';



export function Cart({ cardData, setCardData }) {

    const [url, setUrl] = useState("")
    const message = () => {
        let text = "https://wa.me/573118282038?text="
        text += `Bienvenido a Jumbo hair , Estos son los productos que escogiste: \n\n`
        cardData.forEach(product => {
            text += `${product.name}\n`
            text += `Precio: ${product.price}\n\n`
        })
        text += `\n\nGracias por comprar, en un momento atenderemos tu pedido.\n`
        setUrl(encodeURI(text))
    }
        return (
           <>
           <div>
               <Begin/>
            </div>
            <div>
                {cardData.map((item) => (

                    <div className='cart-cont'>
                        <img className='cart-img' width="150px" src={item.image} alt="image product" />
                        <div className='cart-info'>
                            <h2> {item.name}</h2>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                        
                    </div>


                ))}
                <br /> <br /> <br /> <br /><br /><br /> <br /><br /><br /><br />
                <a href={url} className='continue' onClick={message} target="_blank" rel="noreferrer">Continuar</a>
            </div>
            </>
        )
    }


