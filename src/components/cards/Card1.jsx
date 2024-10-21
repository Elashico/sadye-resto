import '../../styles/cards-styles/card1.css'

function Card1(props){
    return(
        <div className="card-1">
            <section className='img-container'>
                <img src={props.image} alt="aloo tika img" />
            </section>
            <div>
                <h3> {props.name} </h3>
                <section className='rating-container'>
                    <img src="/images/ratings-star.png" alt="stars" className='rating-star' />
                </section>
            </div>
        </div>
    );
}
export default Card1