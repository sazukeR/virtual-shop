import { FC, ReactNode, useEffect, useReducer } from "react";
import Cookie from "js-cookie"; // PODRIA DAR UN ERROR YA QUE ESTA DEPENDENCIA NO VIENE CON EL TYPESCRIPTT, PARA ESTO EJECUTAMOS yarn add -D @types/js-cookie
import { ICartProduct } from "../../../interfaces";
import { CartContext, cartReducer } from "./";

export interface CartState {
 cart: ICartProduct[];
 numberOfItems: number;
 subTotal: number;
 tax: number;
 total: number;
}

interface Props {
 children: ReactNode;
}

const CART_INITIAL_STATE: CartState = {
 cart: [],
 numberOfItems: 0,
 subTotal: 0,
 tax: 0,
 total: 0,
};

export const CartProvider: FC<Props> = ({ children }) => {
 const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

 // AL RECARGAR EL NAVEGADOR, SE VA A TOMAR LA INFORMACION DE LAS COOKIES PARA RELLENAR EL ESTADO DEL CARRITO DE COMPRE, PERSITENCIA DE DATOS
 useEffect(() => {
  /*   const coookieProducts = Cookie.get("cart")
   ? JSON.parse(Cookie.get("cart")!) // EL SIGNO DE ADMIRACION ES PARA INDICAR QUE YA ESTOY HACIENDO LA EVALUACION PORQUE ME ESTA MARCANDO QUE PODRIA SER UNDEFINED
   : [];

  dispatch({
   type: "[CART] - LoadCart from cookies | storage",
   payload: coookieProducts,
  }); */

  // ES OPCIONAL, PERO TAMBIEN PODRIAMOS HACERLO DE LA SIGUIENTE FORMA CON TRYCATCH
  // ESTO ES EN CASO DE QUE NO LOGRARA PARCEAR LA COOKIER POR ALGUNA RAZON, PODRIA SER QUE ALGUIEN LA MANIPULO EN EL NAVEGADOR
  try {
   const coookieProducts = Cookie.get("cart")
    ? JSON.parse(Cookie.get("cart")!) // EL SIGNO DE ADMIRACION ES PARA INDICAR QUE YA ESTOY HACIENDO LA EVALUACION PORQUE ME ESTA MARCANDO QUE PODRIA SER UNDEFINED
    : [];

   dispatch({
    type: "[CART] - LoadCart from cookies | storage",
    payload: coookieProducts,
   });
  } catch (error) {
   dispatch({
    type: "[CART] - LoadCart from cookies | storage",
    payload: [],
   });
  }
 }, []);

 // DE ESTA FORMA GUARDAMOS EN LAS COOKIES LOS ITEMS DEL CARRITO CADA VEZ QUE HAY UNA ACTUALIZACION EN EL ESTADO DEL CARRITO (STATE.CART)
 useEffect(() => {
  // sobreescribia lo grabado con un arreglo vacio entonces mejor simplemente evitarlo si el arreglo esta vacio, estariamos grabando una cookie sin nada de informacion
  if (state.cart.length === 0) return;

  Cookie.set("cart", JSON.stringify(state.cart));
 }, [state.cart]);

 useEffect(() => {
  const numberOfItems = state.cart.reduce(
   (prev, current) => current.quantity + prev,
   0
  );
  const subTotal = state.cart.reduce(
   (prev, current) => current.quantity * current.price + prev,
   0
  );

  const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0); // NUMBER PORQUE TODAS LAS ENV SON STRINGS Y NECESITAMOS UN NUMERO, Y 0 POR SI DA ERROR LA ENV MANEJAR EL ERROR

  const orderSummary = {
   numberOfItems,
   subTotal,
   tax: subTotal * taxRate,
   total: subTotal * (taxRate + 1),
  };

  dispatch({ type: "[CART] - Update order summary", payload: orderSummary });
 }, [state.cart]);

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
 // DEFINIMOS ESTA FUNCION QUE NOS PERMITIRA ACTUALIZAR LA CANTIDAD DE UN PRODUCTO QUE YA ESTA EN LA LISTA DEL CARRITO
 const updateCartQuantity = (product: ICartProduct) => {
  dispatch({ type: "[CART] - Change cart quantity", payload: product });
 };

 const removeCartProduct = (product: ICartProduct) => {
  dispatch({ type: "[CART] - Remove product in cart", payload: product });
 };

 return (
  <CartContext.Provider
   value={{
    ...state,

    // methods
    addProductToCart,
    updateCartQuantity,
    removeCartProduct,
   }}
  >
   {children}
  </CartContext.Provider>
 );
};
