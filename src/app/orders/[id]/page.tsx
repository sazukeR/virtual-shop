import { CartList, OrderSummary } from "@/components/cart";
import {
 CreditCardOffOutlined,
 CreditScoreOutlined,
} from "@mui/icons-material";
import {
 Box,
 Card,
 CardContent,
 Chip,
 Divider,
 Grid,
 Link,
 Typography,
} from "@mui/material";
import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
 title: "Resumen de la orden - 132434",
 description: "Resumen de la orden",
 openGraph: {
  title: "Resumen de la orden - 132434",
  description: "Resumen de la orden",
 },
};

const OrderPage = () => {
 return (
  <>
   <Typography variant='h1' component='h1'>
    Orden: abc32324
   </Typography>

   {/*    <Chip
    sx={{ my: 2 }}
    label='Pendiente de pago'
    variant='outlined'
    color='error'
    icon={<CreditCardOffOutlined />}
   /> */}

   <Chip
    sx={{ my: 2 }}
    label='Ordan pagada'
    variant='outlined'
    color='success'
    icon={<CreditScoreOutlined />}
   />

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
        {/*  todo:  */}
        <h1>Pagar</h1>

        <Chip
         sx={{ my: 2 }}
         label='Ordan pagada'
         variant='outlined'
         color='success'
         icon={<CreditScoreOutlined />}
        />
       </Box>
      </CardContent>
     </Card>
    </Grid>
   </Grid>
  </>
 );
};
export default OrderPage;
