"use client";

import { ProductList } from "@/components/products";
import { ShopLayout } from "../components/layouts/ShopLayout";
// import { initialData } from "../../database/products"; ESTA EXPORTACION LA USAMOS PARA TRAER LOS PRODUCTOS DEL ARREGLO QUE CREAMOS MIENTRAS SE REALIZABA EL FRONT
import { Typography } from "@mui/material";
import { useProducts } from "../../hooks";
import { FullScreenLoading } from "@/components/ui";

export default function HomePage() {
 const { products, isLoading } = useProducts("/products");

 // console.log({ data });

 return (
  <ShopLayout>
   <Typography variant='h2' sx={{ mb: 1 }}>
    Todos los productos
   </Typography>
   {/* <ProductList products={initialData.products as any} /> */}
   {/* EN ESTE PUNTO DEJAMOS DE MOSTRAR LOS PRODUCTOS DEL ARREGLO QUE CREAMOS MIENTRAS QUE VAMOS HACIENDO EL FRONTEND Y MOSTRAMOS LA INFORMACION QUE VIENE DE NUESTRO BACKEND */}

   {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
  </ShopLayout>
 );
}
