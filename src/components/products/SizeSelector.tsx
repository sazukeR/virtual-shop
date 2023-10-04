import { FC } from "react";
import { Box, Button } from "@mui/material";
import { ISize } from "../../../interfaces";

interface Props {
 selectedSize?: ISize;
 sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
 return (
  <Box>
   {sizes.map((size) => (
    <Button
     key={size}
     size='small'
     color={selectedSize === size ? "primary" : "info"}
     /*   TENGO ERROR NO SE ME SELECCIONA AUTOMATIVAMENTE EL COLOR, CREO Q ES LA IMPORTCION DEL CSS */
    >
     {size}
    </Button>
   ))}
  </Box>
 );
};
