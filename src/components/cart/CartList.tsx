"use client";
import { FC, useContext } from "react";
import NextLink from "next/link";
//import { initialData } from "../../../database/products"; ahora llamada seed-data
import { ItemCounter } from "../ui";

import {
 Box,
 Button,
 CardActionArea,
 CardMedia,
 Grid,
 Link,
 Typography,
} from "@mui/material";
import { CartContext } from "@/context";
import { ICartProduct } from "../../../interfaces";

// YA NO NECESITAMOS HARDCODEAR LOS PRODUCTOS EN EL PRODUCT LIST, AHORA LO TRAEMOS DEL useContext.
/* const productsInCart = [
 initialData.products[0],
 initialData.products[1],
 initialData.products[2],
]; */
// CREAMOS LA INTERFACE PARA LA PROPIEDAD QUE VOY A ENVIAR (O NO EN MI COMPONENTE CARTLIST, ESTA PERMITE QUE ME APAREZCAN LOS BOTONES DE ITAR EN LOS ITEMS, SI NO LA ENVIO POR DEFECTO ES FALSE)
interface Props {
 editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {
 // NOS TRAEMOS DEL CONTEXTO GLOBAL, EL ESTADO ACTUAL DEL CARRITO Y LA FUNCION QUE DEFINIMOS EN EL PROVIDER QUE NOS PERMITIRA AUMENTTAR O DISMINUIR LA CANTIDAD DE UN PRODUCTO EN EL CARTLIST
 const { cart, updateCartQuantity, removeCartProduct } =
  useContext(CartContext);

 // ESTA FUNCION SE EJECUTA CADA VEZ QUE DAMOS UN CLICK EN LOS BOTONES DEL ITEMCOUNTER
 const onNewQuantityValue = (
  product: ICartProduct,
  newQuantityValue: number
 ) => {
  product.quantity = newQuantityValue; // PRIMERO ACTUALIZA LA CANTIDAD DE UN PRODUCTO DEPENDIENDO EL VALOR ACTUALIZADO
  updateCartQuantity(product); // SEGUNDO, EJECUTA LA FUNCION QUE ESTA EN LOS PROVIDER Y A SU VEZ ESTA FUNCION EJECUTA UN DISPATCH QUE ACTUALIZA EL PRODUCTO CON LA NUEVA CANTIDAD
 };

 return (
  <>
   {cart.map((product) => {
    return (
     <Grid
      container
      spacing={2}
      key={
       product.slug + product.size
      } /*  SUMANDO EL PRODUCT.SIZE NOS ASEGURAMOS DE QUE CADA LLAVE ES UNICA */
      sx={{ mb: 1 }}
     >
      <Grid item xs={3}>
       {/* todo: llevar a la pagina del producto */}
       <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
        <Link>
         <CardActionArea>
          <CardMedia
           image={`/products/${product.image}`}
           component='img'
           sx={{ borderRadius: "5px" }}
          />
         </CardActionArea>
        </Link>
       </NextLink>
      </Grid>

      <Grid item xs={7}>
       <Box display='flex' flexDirection='column'>
        <Typography variant='subtitle1'>{product.title}</Typography>
        <Typography>
         Talla: <strong>{product.size}</strong>
        </Typography>
        {/* condicional */}
        {editable ? (
         /* A ESTE COMPONENTE ITEMCOUNTER LE DAMOS UN VALOR Y EL NOS SUMA O NOS RESTA Y LUEGO NOS DEVUELVE ESE NUEVO VALOR EN UPDATEDQUANTITY(NEWVALUE) Y ESE NEWVALUE LO PODEMOS USAR COMO QUERAMOS */
         <ItemCounter
          currentValue={product.quantity}
          maxValue={10}
          updatedQuantity={(newValue) => {
           onNewQuantityValue(product, newValue);
          }}
         />
        ) : (
         <Typography>
          {product.quantity} {product.quantity > 1 ? "productos" : "producto"}
         </Typography>
        )}
       </Box>
      </Grid>

      <Grid
       item
       xs={2}
       display='flex'
       alignItems='center'
       flexDirection='column'
      >
       <Typography variant='subtitle1'>{`$${product.price}`}</Typography>

       {/* editable */}

       {editable && (
        <Button
         onClick={() => removeCartProduct(product)}
         variant='text'
         color='secondary'
        >
         Remover
        </Button>
       )}
      </Grid>
     </Grid>
    );
   })}
  </>
 );
};
