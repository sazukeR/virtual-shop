import { Metadata } from "next";

import { initialData } from "../../../database/seed-data";
import { ProductList } from "@/components/products";

import { Typography } from "@mui/material";

export const metadata: Metadata = {
 title: "Tesla-shop",
 description: "Encuentra los mejores productos de tesla-shop",
 openGraph: {
  title: "Tesla-shop",
  description: "Encuentra los mejores productos de tesla-shop",
 },
};

export default function ShopPage() {
 return (
  <>
   <Typography variant='h1' component='h1'>
    Tienda
   </Typography>
   <Typography variant='h2' sx={{ mb: 1 }}>
    Todos los productos
   </Typography>

   <ProductList products={initialData.products as any} />
  </>
 );
}
