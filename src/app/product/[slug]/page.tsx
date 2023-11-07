//import { initialData } from "../../../../database/products";

import type { Metadata } from "next";
import { Box, Grid, Typography } from "@mui/material";

import { TempProduct, ProductSlidesShow } from "@/components/products";

import { useProduct } from "../../../../hooks";

//import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// const product = initialData.products[0]; ASI NOS TRAIAMOS UN PRODUCTO ANTERIORMENTE PARA TENER ALGO QUE MOSTRAR MIENTRAS REALIZABAMOS LAS PAGES

type Params = {
 params: {
  slug: string;
 };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
 return {
  title: params.slug,
  description: "Historial de ordenes del cliente",
  openGraph: {
   title: params.slug,
   description: "Historial de ordenes del cliente",
  },
 };
}

const ProductPage = async ({ params }: Params) => {
 const lastPath = "/" + params.slug;

 console.log(lastPath);
 const product = await useProduct(lastPath);

 return (
  <Grid container spacing={3}>
   <Grid item xs={12} sm={7}>
    <ProductSlidesShow images={product.images} />
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

     <TempProduct product={product} />

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
