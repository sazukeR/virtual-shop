"use client";

import NextLink from "next/link";
import {
 AppBar,
 Badge,
 Box,
 Button,
 IconButton,
 Link,
 Toolbar,
 Typography,
} from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar = () => {
 return (
  <AppBar>
   <Toolbar>
    <NextLink href='/' passHref legacyBehavior>
     <Link display='flex' alignItems='center'>
      <Typography variant='h6'>Teslo |</Typography>
      <Typography sx={{ ml: 0.5 }}>Shop</Typography>
     </Link>
    </NextLink>
    <Box flex={1} />
    {/* este box me tomara todo el espacio disponible en la barra de navegacion, separando los botones de un lado y el link teslo de otro lado como un space-between */}
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
     {/* ESTE ES UN RENDERIZADO CONDICIONAL MUY UTIL DE MATERIALUI, DECIMOS QUE EN PANTALLAS PEQUENAS EL BOX NO SE MOSTRARA, POR LO TANTO ACULTARA LAS OPCIONES DEL MENU Y EL PANTALLAS MEDIANAS EN ADELANTE SE MUESTRA */}
     <NextLink href='/category/men' passHref legacyBehavior>
      <Link>
       <Button>Hombres</Button>
      </Link>
     </NextLink>
     <NextLink href='/category/women' passHref legacyBehavior>
      <Link>
       <Button>Mujeres</Button>
      </Link>
     </NextLink>
     <NextLink href='/category/kid' passHref legacyBehavior>
      <Link>
       <Button>Ninos</Button>
      </Link>
     </NextLink>
    </Box>
    <Box flex={1} />

    <IconButton>
     <SearchOutlined />
    </IconButton>

    <NextLink href='/cart' passHref legacyBehavior>
     <Link>
      <IconButton>
       <Badge badgeContent={2} color='secondary'>
        <ShoppingCartOutlined />
       </Badge>
      </IconButton>
     </Link>
    </NextLink>

    <Button>Menu</Button>
   </Toolbar>
  </AppBar>
 );
};