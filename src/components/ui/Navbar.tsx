"use client";
import { useContext, useState } from "react";
import { CartContext, UiContext } from "@/context";
import NextLink from "next/link";
import {
 AppBar,
 Badge,
 Box,
 Button,
 IconButton,
 Input,
 InputAdornment,
 Link,
 Toolbar,
 Typography,
} from "@mui/material";
import {
 ClearOutlined,
 SearchOutlined,
 ShoppingCartOutlined,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
 const pathname = usePathname();
 const router = useRouter();

 //console.log(pathname);

 const { toggleSideMenu } = useContext(UiContext);
 const { numberOfItems } = useContext(CartContext);

 const [searchTerm, setSearchTerm] = useState("");
 const [isSearchVisible, setIsSearchVisible] = useState(false);

 const onSearchTerm = () => {
  if (searchTerm.trim().length === 0) return;

  router.push(`/search/${searchTerm}`);
 };

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
    <Box
     sx={{ display: isSearchVisible ? "none" : { xs: "none", sm: "block" } }}
     className='fadeIn'
    >
     {/* ESTE ES UN RENDERIZADO CONDICIONAL MUY UTIL DE MATERIALUI, DECIMOS QUE EN PANTALLAS PEQUENAS EL BOX NO SE MOSTRARA, POR LO TANTO ACULTARA LAS OPCIONES DEL MENU Y EL PANTALLAS MEDIANAS EN ADELANTE SE MUESTRA */}
     <NextLink href='/category/men' passHref legacyBehavior>
      <Link>
       <Button color={pathname === "/category/men" ? "primary" : "info"}>
        Hombres
       </Button>
      </Link>
     </NextLink>
     <NextLink href='/category/women' passHref legacyBehavior>
      <Link>
       <Button color={pathname === "/category/women" ? "primary" : "info"}>
        Mujeres
       </Button>
      </Link>
     </NextLink>
     <NextLink href='/category/kid' passHref legacyBehavior>
      <Link>
       <Button color={pathname === "/category/kid" ? "primary" : "info"}>
        Ninos
       </Button>
      </Link>
     </NextLink>
    </Box>
    <Box flex={1} />

    {/* PANTALLAS GRANDES */}
    {isSearchVisible ? (
     <Input
      sx={{ display: { xs: "none", sm: "flex" } }}
      className='fadeIn'
      autoFocus
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
      type='text'
      placeholder='Buscar...'
      endAdornment={
       <InputAdornment position='end'>
        <IconButton onClick={() => setIsSearchVisible(false)}>
         <ClearOutlined />
        </IconButton>
       </InputAdornment>
      }
     />
    ) : (
     <IconButton
      onClick={() => setIsSearchVisible(true)}
      className='fadeIn'
      sx={{ display: { xs: "none", sm: "flex" } }}
     >
      <SearchOutlined />
     </IconButton>
    )}

    {/* PANTALLAS PEQUENAS */}
    <IconButton
     sx={{ display: { xs: "flex", sm: "none" } }}
     onClick={toggleSideMenu}
    >
     <SearchOutlined />
    </IconButton>

    <NextLink href='/cart' passHref legacyBehavior>
     <Link>
      <IconButton>
       <Badge
        badgeContent={numberOfItems > 9 ? "+9" : numberOfItems}
        color='secondary'
       >
        <ShoppingCartOutlined />
       </Badge>
      </IconButton>
     </Link>
    </NextLink>

    <Button onClick={toggleSideMenu}>Menu</Button>
   </Toolbar>
  </AppBar>
 );
};
