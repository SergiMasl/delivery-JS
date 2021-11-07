const cardsRestaurants = document.querySelector('.cards-restaurants')

const renderItems = (data) => {

    data.forEach((item) => {
        const {image, kitchen, name, price, products, stars, time_of_delivery} = item
        const a = document.createElement('a');
        
        a.setAttribute('href', `${window.location.origin}/restaurant.html`);
        a.classList.add("card", "card-restaurant");
        a.dataset.products = products

        a.innerHTML = `
            <img src=${image} alt=${name} class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} min</span>
                </div>
                <div class="card-info">
                    <div class="rating">
                        ${stars}
                    </div>
                    <div class="price">From $ ${price}</div>
                    <div class="category">${kitchen}</div>
                </div>
            </div>
        `

        a.addEventListener('click', (e) => {
            e.preventDefault();

            localStorage.setItem('restaurant', JSON.stringify(item))
            window.location.href = `${window.location.origin}/restaurant.html`
        })
        
        cardsRestaurants.append(a)
        console.log(a)
    })
    

}


fetch('https://test-d1b4d-default-rtdb.firebaseio.com/db/partners.json')
    .then((res) => res.json())
    .then((data) => renderItems(data))
    .catch((error) => {
        console.dir(error)
        alert(error)
    })

