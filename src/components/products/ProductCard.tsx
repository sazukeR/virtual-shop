"use client";

import {
 Box,
 Card,
 CardActionArea,
 CardMedia,
 Grid,
 Link,
 Typography,
} from "@mui/material";
import { IProduct } from "../../../interfaces";
import { FC, useMemo, useState } from "react";
import NextLink from "next/link";

interface Props {
 product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
 const [isHovered, setIsHovered] = useState(false); // SERVIRA PARA SABER CUANDO ESTA EL MOUSE ENCIMA

 const productImage = useMemo(() => {
  return isHovered
   ? `products/${product.images[1]}`
   : `products/${product.images[0]}`;
 }, [isHovered, product.images]);

 return (
  <Grid
   item
   xs={6}
   sm={4}
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  >
   <Card>
    <NextLink href='/product/slug' passHref prefetch={false} legacyBehavior>
     <Link>
      <CardActionArea>
       <CardMedia
        component='img'
        image={
         productImage
        } /* CREAMOS UN ESTADO PARA CAMBIAR DE IMAGEN CUANDO SE HACE HOVER SOBRE ELLA */
        alt={product.title}
        className='fadeIn'
       />
      </CardActionArea>
     </Link>
    </NextLink>
   </Card>

   <Box sx={{ mt: 1 }} className='fadeIn'>
    <Typography fontWeight={700}>{product.title}</Typography>

    <Typography fontWeight={500}>${product.price}</Typography>
   </Box>
  </Grid>
 );
};
