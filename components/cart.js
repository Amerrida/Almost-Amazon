import {book} from 'place store here'
import {printToDom} from 'place utilites here'

const bookStringBuilder = () => {
    let newString = '';
    // for(let i=0; i<book.length;i++){
    newString+= `<img class="col" src="https://images-na.ssl-images-amazon.com/images/I/51eAMQG-GkL.jpg">`;
    newString+= ` <p class="price d-flex justify-content-center" id="price">$7.99>$${book.price}</p>`;
    newString+= `</div>`
    newString+= `<img class="cartImage" src= "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYiIuz6_HdAhXIVt8KHZQWADMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fshopping-cart-icon-vector-10471645&psig=AOvVaw1Q9msLNPhj0S10FyQ54WpX&ust=1538916109252536"></img>`;
    newString+= `</div>`;
    printToDom(newString, 'cart');
};


 


