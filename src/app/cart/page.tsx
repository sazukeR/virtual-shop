import { CartList } from "@/components/cart";
import {
 Box,
 Button,
 Card,
 CardContent,
 Divider,
 Grid,
 Typography,
} from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Carrito - 3",
 description: "Carrito de compras de la tienda",
 openGraph: {
  title: "Carrito - 3",
  description: "Carrito de compras de la tienda",
 },
};

const CartPage = () => {
 return (
  <>
   <Typography variant='h1' component='h1'>
    Carrito
   </Typography>

   <Grid container>
    <Grid item xs={12} sm={7}>
     <CartList />
    </Grid>

    <Grid item xs={12} sm={5}>
     <Card className='summary-card'>
      <CardContent>
       <Typography variant='h2'>Orden</Typography>
       <Divider sx={{ my: 1 }} />

       {/* order summary */}

       <Box sx={{ mt: 3 }}>
        <Button color='secondary' className='circular-btn' fullWidth>
         Checkout
        </Button>
       </Box>
      </CardContent>
     </Card>
    </Grid>
   </Grid>
  </>
 );
};
export default CartPage;
