import {printToDom} from "../helpers/util.js";
import {buyBook} from "../components/cart.js";

const addToCartButton = document.getElementById('cartbtn');

const kidsbook = { 
    name: 'ITSY BITSY SPIDER',
    author: 'Nursery Book',
    price: '$7.99',
    image: 'https://www.westmusic.com/product/image/medium/849469_0.png'
}


const bookBuilder = ()=>{
    let domString = `<div class='book_container'>`;
        domString +=`<h3>${kidsbook.name}</h3>`;
        domString +=`<h5>${kidsbook.author}</h5>`;
        domString += `<img src="${kidsbook.image}" width="200px" height="250px">`;
        domString +=`<h4>Price: ${kidsbook.price}</h4>`;
        domString +=`</div>`;
    printToDom(domString, 'bookInfo');
}
  
const getPrice = () => {  
    console.log (kidsbook.price);
    return kidsbook.price;
};

const getBookImg =() => {
    return kidsbook.image
};
const addToCartButtonEvent = () => {
    addToCartButton.addEventListener('click', (e)=>{
        buyBook();
    })
}

export {getBookImg,getPrice,bookBuilder,addToCartButtonEvent};