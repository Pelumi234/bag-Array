let gallery = [
    {
        name: 'Moon Phase Full Moon Bucket Bag - Cream',
        image:'bag1',
        price: '$189.00 USD'
    },
    {
        name: 'The Bubble Fold & Go Shoulder Bag - Bright Silvery',
        image:'bag2',
        price: '$159.00 USD'
    },
    {
        name: 'Round Lotus Flap Crossbody Bag - Blue',
        image:'bag3',
        price: '$139.00 USD'
    },
    {
        name: 'Christian Dior, 2019',
        image:'bag4',
        price: '$150.00 USD'
    },
    {
        name: 'The Cloud Super Light Hobo Shoulder Bag - Purple',
        image:'bag5',
        price: '$259.00 USD'
    },
    {
        name: 'Square S Baguette Crossbody Bag - Beige',
        image: 'bag6',
        price: '$129.00 USD'
    },
    {
        name: 'Helios Flap Shoulder Bag',
        image:'bag7',
        price: '$239.00 USD'
    },
    {
        name: 'Selena Flap Shoulder Bag',
        image:'bag8',
        price: '$239.00 USD'
    },
    {
        name: 'Mini Tech Handbag-Yellow',
        image:'bag9',
        price: '$49.00 USD'
    },
    {
        name: 'Furry Large Crossbody Bag Cashmere Suede- coffee',
        image:'bag-10',
        price: '$319.00 USD'
    },
    {
        name: 'Elaine Square Crossbody Bag Weaving - Black',
        image:'bag-11',
        price: '$239.00 USD'
    },
    {
        name: 'Jada Satchel Top Handle Bag Croc-Effect Medium - Cream',
        image:'bag-12',
        price: '$149.00 USD'
    },
]

let bagSection = document.getElementById('bag-wrap');
let html = "";
gallery.forEach(e =>{
    html +=`
        <div class="card" style="width: 18rem;">
            <img src="../img/${e.image}.jpg" class="card-img-top" alt="Bucket bag">
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.price}</p>
            </div>
        </div>
    `
    console.log(e)

    bagSection.innerHTML = html
})
    
