import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
 title: "Carrito vacio",
 description: "No hay artivulos en el carrito",
 openGraph: {
  title: "Carrito vacio",
  description: "No hay artivulos en el carrito",
 },
};

const EmptyPage = () => {
 return (
  <Box
   display='flex'
   justifyContent='center'
   alignItems='center'
   height='calc(100vh - 200px)'
   sx={{ flexDirection: { xs: "column", sm: "row" } }}
  >
   <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
   <Box display='flex' flexDirection='column' alignItems='center'>
    <Typography>Su carrito esta vacio</Typography>
    <NextLink href='/' passHref legacyBehavior>
     <Link typography='h4' color='secondary'>
      Regresar
     </Link>
    </NextLink>
   </Box>
  </Box>
 );
};
export default EmptyPage;
