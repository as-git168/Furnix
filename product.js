// Temporary data storage matrix matching your exact file assets
const productCatalog = {
    "seating" : {
        title : "Minimalist Lounge Chair",
        price :"299",
        description:"An elegant Scandinavian-style lounge chair featuring an ergonomic woven seat resting on a prenium , hand-sanded ash wood frame.Blendsseamlessly into bright, modern spaces.",
        image:"images/lounge_chair.png",
        rating: 5,
        ratingNum:"5.0",
        reviews:[
            {author:"Aashi Sinha",feedback:"The ash wood texture is gorgeous.Fits my room aesthetic perfecting!",stars: 5},
            {author:"Rahul Sharma",feedback:"Sturdy build and incredibly comfortable for long reading sessions.",stars: 5}
        ]
    },
    "lighting":{
        title: "Sleek Desk Lighting",
        price: "120",
        description:"Adjustable matte-black metal desk fixture engineered to provie focused, warm contextual lighting for studying, drafting, or office task environments.",
        image:"images/hanging_lamp.png",
        rating: 4,
        ratingNum: "4.0",
        reviews: [{author:"Aisha Agarwal",feedback:"Super clean design, doesn't clutter up the working desk canvas.",stars:4}]
    },
     "tables":{
        title: "Smooth Round Table",
        price: "350",
        description:"Tailor your space with precision tilt functionality, premium matte finishes, and seamless integration for any contempory interior.",
        image:"images/side_table.png",
        rating: 5,
        ratingNum: "5.0",
        reviews: [{author:"Aisha Agarwal",feedback:"Very great quality.Loved trhe product",stars:5},
        {author:"Zoya Ali",feedback:"Very smooth surface for daily work.",stars:4}]
    },
    "accesories":{
        title: "Flower Beauty",
        price: "199",
        description:"Handicrafted ceramic, ribbed glass, and minimalist clay flower vase, engineered to provide a striking structural anchor for both fresh bl,ooms and dried botanicals.",
        image:"images/flower-vase.png",
        rating: 3,
        ratingNum: "3.0",
        reviews: [{author:"Aaliya",feedback:"Size could be more better.Other than that it is a useful product",stars:3},{author:"Raghav Rajput",feedback:"Very Beautiful.",stars:4}]
    }
};
// Extract identifer parameter from the URL string
const urlQuery = new URLSearchParams(window.location.search);
const targetID = urlQuery.get('id');

// Match the URL ID against our catalog data
const activeItem = productCatalog[targetID];
if(activeItem){
    //Inject structural text contents
    document.getElementById('dyn-title').innerText = activeItem.title;
    document.getElementById('dyn-price').innerText = activeItem.price;
    document.getElementById('dyn-description').innerText = activeItem.description;

    const imgElement = document.getElementById('display-img');
    if(imgElement){
        imgElement.src = activeItem.image;
    }
    document.getElementById('dyn-rating-num').innerText = activeItem.ratingNum;

    // Render standard visual Star Elements
    const starsBox = document.getElementById('stars-container');
    starsBox.innerHTML = '<i class = "fa-solid fa-star></i>'.repeat(activeItem.rating);

    // Loop and construct the Customer Review panels
    const commentsBox = document.getElementById('comments-box');
    commentsBox.innerHTML = "";

    activeItem.reviews.forEach(item => {
        const componentCard = `
        <article class = "review-card">
           <div class = "review-meta">
             <strong>${item.author}</strong>
             <span class = "stars-gold">${'<i class = "fa-solid fa-star"></i>'.repeat(item.stars)}</span>
            </div>
            <p>${item.feedback}</p>
        </article>
        `;
        commentsBox.innerHTML += componentCard;
    });
}else {
    document.getElementById('dyn-title').innerText = "Product Canvas Details Missing";
    document.getElementById('dyn-description').innerText = "The specified inventory item id does not exist in our catalog mspping syntax.";
}