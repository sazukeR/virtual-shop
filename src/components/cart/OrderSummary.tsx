"use client";

import { Grid, Typography } from "@mui/material";

export const OrderSummary = () => {
 return (
  <Grid container>
   <Grid item xs={6}>
    <Typography>No. Productos</Typography>
   </Grid>

   <Grid item xs={6} display='flex' justifyContent='end'>
    <Typography>3 items</Typography>
   </Grid>

   <Grid item xs={6} display='flex'>
    <Typography>Subtotal</Typography>
   </Grid>

   <Grid item xs={6} display='flex' justifyContent='end'>
    <Typography>{`$${155.4}`}</Typography>
   </Grid>

   <Grid item xs={6} display='flex'>
    <Typography>Imp (15%)</Typography>
   </Grid>

   <Grid item xs={6} display='flex' justifyContent='end'>
    <Typography>{`$${35.6}`}</Typography>
   </Grid>

   <Grid item xs={6} sx={{ mt: 2 }} display='flex'>
    <Typography variant='subtitle1'>Total:</Typography>
   </Grid>

   <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 2 }}>
    <Typography variant='subtitle1'>{`$${191.0}`}</Typography>
   </Grid>
  </Grid>
 );
};
