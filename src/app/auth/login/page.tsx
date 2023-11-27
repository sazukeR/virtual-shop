"use client";

import NextLink from "next/link";
import { Metadata } from "next";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { trusted } from "mongoose";
import { validations } from "@/utils";

export const metadata: Metadata = {
 title: "Ingresar",
 description: "Encuentra los mejores productos de tesla-shop",
 openGraph: {
  title: "Tesla-shop",
  description: "Encuentra los mejores productos de tesla-shop",
 },
};

type FormData = {
 email: string;
 password: string;
};

const LoginPage = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<FormData>();

 const onLoginUser = (data: FormData) => {
  console.log({ data });
 };

 return (
  <>
   <form onSubmit={handleSubmit(onLoginUser)}>
    <Box sx={{ width: 350, padding: "10px 20px" }}>
     <Grid container spacing={2}>
      <Grid item xs={12}>
       <Typography variant='h1' component='h1'>
        Iniciar Sesion
       </Typography>
      </Grid>

      <Grid item xs={12}>
       <TextField
        label='Correo'
        variant='filled'
        fullWidth
        {...register("email", {
         required: "El campo email es requerido",
         validate: validations.isEmail,
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
       />
      </Grid>

      <Grid item xs={12}>
       <TextField
        label='Contrasena'
        type='password'
        variant='filled'
        fullWidth
        {...register("password", {
         required: "El campo contrasena es requerido",
         minLength: {
          value: 6,
          message: "La contrasena debe tener al menos 6 caracteres",
         },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
       />
      </Grid>

      <Grid item xs={12}>
       <Button
        type='submit'
        color='secondary'
        className='circular=btn'
        size='large'
        fullWidth
       >
        Ingresar
       </Button>
      </Grid>

      <Grid item xs={12} display='flex' justifyContent='end'>
       <NextLink href='/auth/register' passHref legacyBehavior>
        <Link underline='always'>No tienes cuenta?</Link>
       </NextLink>
      </Grid>
     </Grid>
    </Box>
   </form>
  </>
 );
};

export default LoginPage;
