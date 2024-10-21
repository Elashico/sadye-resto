import './styles/app.css'
import Header from "./components/Header.jsx"
import Landing from "./components/Landing.jsx";
import Card1 from "./components/cards/card1.jsx"
import Card2 from "./components/cards/Card2.jsx"
import Flavors from "./components/Flavors.jsx"
import Order from "./components/Order.jsx"
import Card4 from "./components/cards/Card4.jsx"

function App() {
  return(
    <>
      <Header />

      <body>

        <Landing />
        
        <section className="popular-foods">
          <div>
            <Card1 image='/foods/aloo-tika.png' name="Aloo Tika" />
          </div>
          <div>
            <Card1 image='/foods/puri.png' name="Puri" />
          </div>
          <div>
            <Card1 image='/foods/veg-pakoras.png' name="Vegtable Pakoras" />
          </div>
        </section>

        <hr></hr>

        <section className="niches">
          <div>
            <Card2 image='/images/payment.png' text="Enjoy the Convenience of Cashless Payment" />
          </div>
          <div>
            <Card2 image='/images/enjoy.png' text="Enjoy the Sadye Everywhere" />
          </div>
          <div>
            <Card2 image='/images/experience.png' text="Enjoy the Sadye's Fast Delivery" />
          </div>
        </section>

        <Flavors />
        <Order />

        <section className='menuu'>
          <h1>Sadye's Menu</h1>
          <section className='menuu-container'>
            <div>
              <Card4 image="/foods/chana-masala.png" title="Chana Masala" price="300.00" text="Spiced chickpeas cooked in a tangy tomato and onion gravy, served with rice or bread."/>
            </div>
            <div>
              <Card4 image="/foods/baingan.png" title="Baingan Bharta" price="300.00" text="Roasted and mashed eggplant cooked with spices, tomatoes, and onions."/>
            </div>
            <div>
              <Card4 image="/foods/chicken-curry.png" title="Chicken Curry" price="300.00" text="Tender chicken pieces simmered in a spiced  gravy made with tomatoes, onions, and a blend of Indian spices."/>
            </div>
            <div>
              <Card4 image="/foods/red-soup-1.png" title="Mutton Rogan Josh" price="300.00" text="Slow-cooked lamb or goat in a rich, aromatic gravy, flavored with Indian spices."/>
            </div>
            <div>
              <Card4 image="/foods/fish-curry.png" title="Fish Curry" price="300.00" text="A flavorful curry made with fish  cooked in a coconut milk or tomato-based sauce with spices."/>
            </div>
            <div>
              <Card4 image="/foods/paleck.png" title="Palek Paneer" price="300.00" text="Paneer cubes simmered in a smooth spinach sauce with aromatic spices."/>
            </div>
            <div>
              <Card4 image="/foods/paleck.png" title="Palek Paneer" price="300.00" text="Paneer cubes simmered in a smooth spinach sauce with aromatic spices."/>
            </div>
            <div>
              <Card4 image="/foods/chicken-curry.png" title="Chicken Curry" price="300.00" text="Tender chicken pieces simmered in a spiced  gravy made with tomatoes, onions, and a blend of Indian spices."/>
            </div>
          </section>
          <button className='btn-style'>MORE MENU</button>
        </section>
        


      </body>
    </>
  );
}

export default App
