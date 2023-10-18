import { ProductList } from "@/components/products";
import { ShopLayout } from "../components/layouts/ShopLayout";
import { initialData } from "../../database/products";
import { Typography } from "@mui/material";

export default function HomePage() {
 return (
  <ShopLayout>
   <Typography variant='h2' sx={{ mb: 1 }}>
    Todos los productos
   </Typography>

   <ProductList products={initialData.products as any} />
  </ShopLayout>
 );
}
