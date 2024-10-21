// import soup from '../assets/foods/red-soup.png'
import '../styles/landing.css'

function Landing(){
    return(
        <div className='landing-bg'>
            <div className='landing'>
                <div className='landing-img'>
                    <img src='/foods/red-soup.png' alt="soup" /> 
                </div>
                <div className='landing-txt'>
                    <div>
                        <h1>Crafting Culinary Tales with Every Bite</h1>
                        <h2>We blend age-old recipes with contemporary techniques to bring you an authentic yet innovative dining experience.</h2>
                    </div>
                    <div className='btn-container'>
                        <button className='btn-style'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Landing