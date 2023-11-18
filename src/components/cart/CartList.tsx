"use client";
import { FC, useContext } from "react";
import NextLink from "next/link";
//import { initialData } from "../../../database/products";
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
 const { cart } = useContext(CartContext);

 return (
  <>
   {cart.map((product) => {
    return (
     <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
      <Grid item xs={3}>
       {/* todo: llevar a la pagina del producto */}
       <NextLink href='/product/slug' passHref legacyBehavior>
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
         Talla: <strong>M</strong>
        </Typography>
        {/* condicional */}
        {editable ? (
         <ItemCounter
          currentValue={product.quantity}
          maxValue={10}
          updatedQuantity={() => {}}
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
        <Button variant='text' color='secondary'>
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
