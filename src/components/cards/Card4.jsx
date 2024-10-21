import '../../styles/cards-styles/card-4.css'

function Card4(menu){
    return(
        <div class="menu-item">
            <div class="menu-image-container">
                <img src={menu.image} alt="idk" class="menu-image" />
            </div>
            <div class="menu-info">
                <h2 class="menu-title">{menu.title}</h2>
                <h3 class="menu-price">Php {menu.price}</h3>
            </div>
            <h4 class="menu-description">
                {menu.text}
            </h4>
        </div>
    );
}

export default Card4