
import { CartState } from "./";
import { ICartProduct } from "../../../interfaces";

type CartActionType = 
    | { type: '[CART] - LoadCart from cookies | storage', payload: ICartProduct[] }
    | { type: '[CART] - Update products in cart', payload: ICartProduct[] }




export const cartReducer = ( state: CartState, action: CartActionType ): CartState => {



    switch (action.type) {
        case '[CART] - LoadCart from cookies | storage':
            return {
                ...state,
            }


        case '[CART] - Update products in cart':
            return {
                ...state,
                cart: [...action.payload]
            }
    
        default:
            return state;
    }
}