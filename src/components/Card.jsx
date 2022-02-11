import '../Styles/card.css';
import '../Styles/begin.css';
import {Info} from "../Apis/indiv";
import { Info2} from '../Apis/Set';
import { Alert } from './Alert';

function Card({cardData, setCardData}){

   
    return(
      <>
      <div>
          {Info.map((article) =>
          <>
          <div className='container'>
             <img className='card-img'  width="150px" src={article.image} alt="product's image" />
          
          <div className='card-info'>
              <h2>{article.name}</h2>
              <p>{article.price}</p>
              <Alert
                cardData={cardData}
                setCardData={setCardData}
                article={article}
            
              />
          </div>
          </div>
          </> 
          )}
      </div>
      <div className='tittle' >Set de Scrunchies</div>
      <div>
          {Info2.map((set) =>
          <>
          <div className='container'>
             <img className='card-img' width="150px" src={set.image} alt="product's image" />
             
          <div className='card-info'>
              <h2>{set.name}</h2>
              <p>{set.price}</p>
          </div>
          <div>
          <Alert/>
          </div>
          </div>
          </> 
          )};
      </div>
     </>
    )
}




export {Card}
