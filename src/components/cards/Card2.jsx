import '../../styles/cards-styles/card2.css'

function Card2(niche){
return(
    <div className='card-2'>
        <img src={niche.image} alt="img" />
        <h3>
            {niche.text}
        </h3>
    </div>
);
}
export default Card2