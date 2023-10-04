"use client";

import { Grid } from "@mui/material";
import { FC } from "react";
import { IProduct } from "../../../interfaces";
import { ProductCard } from "./ProductCard";

// DEBERIA RECIBIR LOS PRODUCTOS QUE SE QUIERE MOSTRAR

interface Props {
 products: IProduct[]; // CREAMOS EN INTERFACES/PRODUCTS UNA INTERFACE DEL TIPADO DE LOS PRODUCTOS EN ESTE CASO ES UN ARREGLO DE IPROTUCTS
}

export const ProductList: FC<Props> = ({ products }) => {
 return (
  <Grid container spacing={4}>
   {products.map((product) => (
    <ProductCard product={product} key={product.slug} />
   ))}
  </Grid>
 );
};
