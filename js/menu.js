const cardsMenu = document.querySelector('.cards-menu')

const changeTitle = (restaurants) => {
    const restaurantTitle = document.querySelector('.restaurant-title');
    restaurantTitle.textContent = restaurants.name;
}

const renderItems = (data) => {
    data.forEach(({description, id, image, name, price}) => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
            <img src=${image} alt=${name} class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">Card</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">$ ${price}</strong>
                </div>
            </div>
        `
        cardsMenu.append(card)
    })
}

if (localStorage.getItem('restaurant')) {
    const restaurants = JSON.parse(localStorage.getItem('restaurant'))
    changeTitle(restaurants)
    

    fetch(`https://test-d1b4d-default-rtdb.firebaseio.com/db/${restaurants.products}`)
        .then((res) => res.json())
        .then((data) => {
            renderItems(data)
        })
        .catch((error) => {
            alert(error)
        })
} else {
   window.location.href = window.location.origin
   
}

