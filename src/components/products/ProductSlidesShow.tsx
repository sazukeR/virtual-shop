"use client";

import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // LOS ESTILOS NOS LO TRAEMOS DE LA CODUMENTACION DE SLIDES-SHOW EN NPM
import styles from "./ProductSlidesShow.module.css";

interface Props {
 images: string[];
}

export const ProductSlidesShow: FC<Props> = ({ images }) => {
 return (
  <Slide easing='ease' duration={7000} indicators>
   {images.map((image) => {
    const url = `/products/${image}`;
    return (
     <div className={styles["each-slide"]} key={image}>
      {" "}
      {/* LA CLASE QUE NOS TRAEMOS DEL ARCHI STYKLE DEBE SER COMPUTADA PORQUE EN EL TSX NO NOS PERMITE USAR EL SIGNO - PARA DEFINIR CLASES */}
      {/* LA TECNICA QUE UTILIZA ESTA LIBRERIA DEL SLIDE-SHOW ES COLOCAR LA IMAGEN EN EL BACKGROUND DEL DIV */}
      <div
       style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
       }}
      ></div>
     </div>
    );
   })}
  </Slide>
 );
};
