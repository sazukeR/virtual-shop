import NextLink from "next/link";

import { Metadata } from "next";

import { CartList, OrderSummary } from "@/components/cart";
import {
 Box,
 Button,
 Card,
 CardContent,
 Divider,
 Grid,
 Link,
 Typography,
} from "@mui/material";

export const metadata: Metadata = {
 title: "Resumen de orden",
 description: "Resumen de la orden",
 openGraph: {
  title: "Resumen de orden",
  description: "Resumen de la orden",
 },
};

const SummaryPage = () => {
 return (
  <>
   <Typography variant='h1' component='h1'>
    Resumen de la orden
   </Typography>

   <Grid container>
    <Grid item xs={12} sm={7}>
     {/*   SI ENVIO LA PROPIEDAD EDITABLE TENGO LAS OPCIONES DE EDITAR EN MI LISTA DE ITEMS */}
     <CartList />
    </Grid>

    <Grid item xs={12} sm={5}>
     <Card className='summary-card'>
      <CardContent>
       <Typography variant='h2'>Resumen: (3 productos)</Typography>
       <Divider sx={{ my: 1 }} />

       <Box display='flex' justifyContent='space-between'>
        <Typography variant='subtitle1'>Direccion de entrega</Typography>
        <NextLink href='/checkout/address' passHref legacyBehavior>
         <Link underline='always'>Editar</Link>
        </NextLink>
       </Box>

       <Typography>Reinaldo Contreras</Typography>
       <Typography>323 Algun lugar</Typography>
       <Typography>Barranco casa 232</Typography>
       <Typography>Peru</Typography>
       <Typography>+51 968904003</Typography>

       <Divider />

       <Box display='flex' justifyContent='end'>
        <NextLink href='/checkout/address' passHref legacyBehavior>
         <Link underline='always'>Editar</Link>
        </NextLink>
       </Box>

       {/* order summary */}
       <OrderSummary />

       <Box sx={{ mt: 3 }}>
        <Button color='secondary' className='circular-btn' fullWidth>
         Confirmar Orden
        </Button>
       </Box>
      </CardContent>
     </Card>
    </Grid>
   </Grid>
  </>
 );
};
export default SummaryPage;
