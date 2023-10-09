import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
 title: "Registro",
 description: "Encuentra los mejores productos de tesla-shop",
 openGraph: {
  title: "Registro",
  description: "Encuentra los mejores productos de tesla-shop",
 },
};

const RegisterPage = () => {
 return (
  <>
   <Box sx={{ width: 350, padding: "10px 20px" }}>
    <Grid container spacing={2}>
     <Grid item xs={12}>
      <Typography variant='h1' component='h1'>
       Crear cuenta
      </Typography>
     </Grid>

     <Grid item xs={12}>
      <TextField label='Nombre' variant='filled' fullWidth />
     </Grid>

     <Grid item xs={12}>
      <TextField label='Correo' variant='filled' fullWidth />
     </Grid>

     <Grid item xs={12}>
      <TextField
       label='Contrasena'
       type='password'
       variant='filled'
       fullWidth
      />
     </Grid>

     <Grid item xs={12}>
      <Button color='secondary' className='circular=btn' size='large' fullWidth>
       Ingresar
      </Button>
     </Grid>

     <Grid item xs={12} display='flex' justifyContent='end'>
      <NextLink href='/auth/login' passHref legacyBehavior>
       <Link underline='always'>Ya tienes cuenta ?</Link>
      </NextLink>
     </Grid>
    </Grid>
   </Box>
  </>
 );
};

export default RegisterPage;
