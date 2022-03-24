import API from "../../API";

import { adddCartAction, increaseCartAction, decreaseCartAction, fetchCartAction} from "./action";

const api = new API();
const CARTS_KEY = 'CARTS_KEY';

export const fetchFromLocalStorage = () => {
    return async (dispatch) => {
        let cartsJSON = localStorage.getItem(CARTS_KEY);
        let carts = {};
        if (cartsJSON) {
            carts = JSON.parse(cartsJSON);
        }
        const subtotal = calculateSubtotal(carts);
        dispatch(fetchCartAction(carts, subtotal));
    }
}

