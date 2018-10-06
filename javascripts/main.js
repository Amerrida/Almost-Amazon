import {bookBuilder,addToCartButtonEvent} from './components/store.js'

const initializeApp = () =>{
    bookBuilder();
    addToCartButtonEvent();
}

initializeApp();