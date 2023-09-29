import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Page not found",
 description: "No hay nada que mostrar aqui",
 openGraph: {
  title: "Page not found",
  description: "No hay nada que mostrar aqui",
 },
};

const Custom404 = () => {
 return (
  <ShopLayout>
   <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    height='calc(100vh - 200px)'
    sx={{ flexDirection: { xs: "column", sm: "row" } }}
   >
    <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
     404 |
    </Typography>
    <Typography marginLeft={2}>No encontramos ninguna pagina aqui</Typography>
   </Box>
  </ShopLayout>
 );
};
export default Custom404;
