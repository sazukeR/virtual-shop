"use client";

import { Metadata, NextPage } from "next";

//import { initialData } from "../../../../database/products";

import { Box, Button, Grid, Typography } from "@mui/material";
import { ItemCounter } from "@/components/ui";
import { ProductSlidesShow, SizeSelector } from "@/components/products";

import { IProduct } from "../../../../interfaces";
import { usePathname } from "next/navigation";
import useProduct from "../../../../hooks/useProduct";

// const product = initialData.products[0]; ASI NOS TRAIAMOS UN PRODUCTO ANTERIORMENTE PARA TENER ALGO QUE MOSTRAR MIENTRAS REALIZABAMOS LAS PAGES

/* export const metadata: Metadata = {
 title: product.title,
 description: product.description,
 openGraph: {
  title: product.title,
  description: product.description,
 },
}; */

const ProductPage = async () => {
 const pathname = usePathname();

 const lastPath = "/" + pathname.split("/").pop();

 console.log(lastPath);
 const product = await useProduct(lastPath);

 console.log(product);

 return (
  <Grid container spacing={3}>
   <Grid item xs={12} sm={7}>
    {product && <ProductSlidesShow images={product.images} />}
   </Grid>

   <Grid item xs={12} sm={5}>
    <Box display='flex' flexDirection='column'>
     {/* titulos */}
     <Typography variant='h1' component='h1'>
      {product.title}
     </Typography>
     <Typography variant='subtitle1' component='h2'>
      ${product.price}
     </Typography>

     <Box sx={{ my: 2 }}>
      <Typography variant='subtitle1'>Cantidad</Typography>

      <ItemCounter />
      {/*   AL SIZE SELECTOR LE MANDAMOS UNA SIZESELECTED POR DEFECTO PERO LA COLOCAMOS OPCIONAL ? PARA QUE SEA EL USUARIO EL QUE SELECCIONE LA TALLA, TOMANDO EN CUENTA QUE EL USUARIO NO SE PODRIA FIJAR Y PODRIA ESTAR COMPRANDO ACCIDENTALMENTE UNA TAALLA QUE NO DESEA */}
      <SizeSelector
       /* selectedSize={product.sizes[0]} */ sizes={product?.sizes}
      />
     </Box>

     <Button color='secondary' className='circular-btn'>
      Agregar al carrito
     </Button>

     {/*  <Chip label='No hay disponibles' color='error' variant='outlined' /> */}

     <Box sx={{ mt: 3 }}>
      <Typography variant='subtitle1'>Descripcion</Typography>
      <Typography variant='body2'>{product.description}</Typography>
     </Box>
    </Box>
   </Grid>
  </Grid>
 );
};

export default ProductPage;
