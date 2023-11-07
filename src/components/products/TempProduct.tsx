"use client";

import { FC, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ICartProduct, IProduct, ISize } from "../../../interfaces";

import { Box, Button, Chip, Typography } from "@mui/material";
import { SizeSelector } from "./SizeSelector";
import { ItemCounter } from "../ui";
import { CartContext } from "@/context";

interface Props {
 product: IProduct;
}

export const TempProduct: FC<Props> = ({ product }) => {
 const { addProductToCart } = useContext(CartContext);

 const router = useRouter();

 const [tempCardProduct, setTempCardProduct] = useState<ICartProduct>({
  _id: product._id,
  image: product.images[0],
  price: product.price,
  size: undefined,
  slug: product.slug,
  title: product.title,
  gender: product.gender,
  quantity: 1,
 });

 const selectedSize = (size: ISize) => {
  setTempCardProduct((currentProduct) => ({
   ...currentProduct,
   size: size,
  }));
 };

 const onUpdateQuantity = (newQuantity: number) => {
  setTempCardProduct((currentQuantity) => ({
   ...currentQuantity,
   quantity: newQuantity,
  }));
 };

 const onAddProduct = () => {
  if (!tempCardProduct) {
   return;
  }
  // todo: agregar producto al carrito
  addProductToCart(tempCardProduct);

  router.push("/cart");
 };

 return (
  <>
   <Box sx={{ my: 2 }}>
    <Typography variant='subtitle1'>Cantidad</Typography>
    <ItemCounter
     currentValue={tempCardProduct.quantity}
     /*    ME TRAIGO LA CANTIDAD ACTUALIZADA DESDE EL COMPONENTE HIJO (ITEMCOUNTER) Y LE PASO ESE VALOR AL COMPONENTE PADRE QUE EJECUTARA UNA FUNCION QUE CAMBIARA EL VALOR DEL QUANTITY EN EL ESTADO AL VALOR QUE TRAJE DEL HIJO */
     updatedQuantity={(newValue) => {
      onUpdateQuantity(newValue);
     }}
     maxValue={product.inStock > 10 ? 10 : product.inStock}
    />
    {/*   AL SIZE SELECTOR LE MANDAMOS UNA SIZESELECTED POR DEFECTO PERO LA COLOCAMOS OPCIONAL ? PARA QUE SEA EL USUARIO EL QUE SELECCIONE LA TALLA, TOMANDO EN CUENTA QUE EL USUARIO NO SE PODRIA FIJAR Y PODRIA ESTAR COMPRANDO ACCIDENTALMENTE UNA TAALLA QUE NO DESEA */}
    <SizeSelector
     /* selectedSize={product.sizes[0]} */ sizes={product?.sizes}
     selectedSize={tempCardProduct.size}
     onSelectedSize={(size) => selectedSize(size)}
    />
   </Box>

   {product.inStock > 0 ? (
    <Button color='secondary' className='circular-btn' onClick={onAddProduct}>
     {tempCardProduct.size ? "Agregar al carrito" : "Seleccione una talla"}
    </Button>
   ) : (
    <Chip label='No hay disponibles' color='error' variant='outlined' />
   )}
  </>
 );
};
