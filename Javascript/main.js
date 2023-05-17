
const priceSearch = () => {
    var slider = document.querySelector('#slider')
    var price = document.querySelector('#price')
    slider.value=0
    price.innerHTML = slider.value+"K"
    slider.oninput = function(){
        price.innerHTML= this.value+"K"
    }
}
priceSearch()



const slideImageChange = () => {
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if(counter > 6) counter = 1;
    }, 4000);
}
slideImageChange()



const orderClothing = () => {
    const buyBtns = document.querySelectorAll('.js-order-btn')
    const order = document.querySelector('.js-order-thing')
    const orderClose = document.querySelector('.js-order-close')
    const closeIcon = document.querySelector('.js-close-btn')
    const orderContainer = document.querySelector('.js-order-container')
    
    function showBuyTickets() {
        order.classList.add('open')
    }
    
    function hideBuyTickets() {
        order.classList.remove('open')
    }
    
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click',showBuyTickets)
    }
    
    orderClose.addEventListener('click',hideBuyTickets)
    closeIcon.addEventListener('click',hideBuyTickets)
    
    
    order.addEventListener('click',hideBuyTickets)
    orderContainer.addEventListener('click', function(event) {
        event.stopImmediatePropagation()
    })
}
orderClothing()


