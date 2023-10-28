import { ProductList } from "@/components/products";

// import { initialData } from "../../database/products"; ESTA EXPORTACION LA USAMOS PARA TRAER LOS PRODUCTOS DEL ARREGLO QUE CREAMOS MIENTRAS SE REALIZABA EL FRONT
import { Box, Typography } from "@mui/material";

// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { dbProducts } from "../../../../database";

type Params = {
 params: {
  query: string;
 };
};

export default async function SearchPage({ params }: Params) {
 // HACEMOS LA CONSULTA DIRECTAMENTE A LA BASE DE DATOS, YA QUE ESTAMOS EN UN COMPONENTE SERVIDOR

 const { query = "" } = params;

 let products = await dbProducts.getProductsByTerm(query);

 const foundProducts = products.length > 0; // HACEMOS UN VALOR BOOLEANO PARA SABER SI SE HAN ENCONTRADO PRODUCTOS O NO

 // todo: retornar otros productos.
 if (!foundProducts) {
  products = await dbProducts.getAllProducts();
  // AQUI TAMBIEN PODRIAMOS USAR GETPRODUCTBYTERM CON UN QUERY DE BUSQUEDA PERSONALIZADO EN CASO DE QUE NO QUERAMOS MOSTRAR TODOS LOS PRODUCTOS SINO CIERTOS PRODUCTOS QUE NOSOTROS QUERAMOS MOSTRAR
 }

 return (
  <>
   <Typography variant='h1' sx={{ mb: 1 }}>
    Buscar Productos
   </Typography>

   {foundProducts ? (
    <Typography variant='h2' sx={{ mb: 1 }} textTransform='capitalize'>
     Busqueda: {query}
    </Typography>
   ) : (
    <Box display='flex'>
     <Typography variant='h2' sx={{ mb: 1 }}>
      No se encontro un producto
     </Typography>
     <Typography
      variant='h2'
      sx={{ mb: 1 }}
      color='secondary'
      textTransform='capitalize'
     >
      {query}
     </Typography>
    </Box>
   )}

   {/* <ProductList products={initialData.products as any} /> */}
   {/* EN ESTE PUNTO DEJAMOS DE MOSTRAR LOS PRODUCTOS DEL ARREGLO QUE CREAMOS MIENTRAS QUE VAMOS HACIENDO EL FRONTEND Y MOSTRAMOS LA INFORMACION QUE VIENE DE NUESTRO BACKEND */}

   <ProductList products={products} />
  </>
 );
}
