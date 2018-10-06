import {getBookImg, getPrice} from "../components/store.js";
import {printToDom} from "../helpers/util.js";

const buyBook = () => {
    let cartString = "";
        cartString +=`<img src="${getBookImg()}">`;
        cartString += `<p> ${getPrice()}</p>`;
        printToDom (cartString,'cart');
 };
 
 export {buyBook};




 


