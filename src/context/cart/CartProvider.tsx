import { FC, ReactNode, useReducer } from "react";
import { ICartProduct } from "../../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
 cart: ICartProduct[];
}

interface Props {
 children: ReactNode;
}

const CART_INITIAL_STATE: CartState = {
 cart: [],
};

export const CartProvider: FC<Props> = ({ children }) => {
 const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

 const addProductToCart = (product: ICartProduct) => {
  // validacion para agregar al carrito
  const productInCart = state.cart.some((p) => p._id === product._id);
  if (!productInCart)
   return dispatch({
    type: "[CART] - Update products in cart",
    payload: [...state.cart, product],
   });

  // validacion cuando es el mismo producto pero en diferente talla
  const productInCartButDifferentSize = state.cart.some(
   (p) => p._id === product._id && p.size === product.size
  );
  if (!productInCartButDifferentSize)
   return dispatch({
    type: "[CART] - Update products in cart",
    payload: [...state.cart, product],
   });

  // validacion para acumular el mismo producto con la misma talla
  const updateProducts = state.cart.map((p) => {
   if (p._id !== product._id) return p;
   if (p.size !== product.size) return p;

   p.quantity += product.quantity;
   return p;
  });

  dispatch({
   type: "[CART] - Update products in cart",
   payload: [...updateProducts],
  });
 };

 return (
  <CartContext.Provider
   value={{
    ...state,

    // methods
    addProductToCart,
   }}
  >
   {children}
  </CartContext.Provider>
 );
};
