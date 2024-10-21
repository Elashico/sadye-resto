import '../../styles/cards-styles/card3.css'

function Card3(flavor){
    return(
        <div className='card3-container'>
            <section className='card3-image'>
                <img src={flavor.image} alt={flavor.title} />
            </section>
            <section className='card3-text'>
                <h3>{flavor.title}</h3>
                <p>{flavor.text}</p>
            </section>
        </div>
    );
}
export default Card3