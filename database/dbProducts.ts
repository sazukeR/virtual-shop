
import { db } from "./";
import { Product } from "../models";
import { IProduct } from "../interfaces";

// ESTE ARCHIVO EN DATABASE LO CREAMOS PARA PODER TRAERNOS DE LA BASE DE DATOS UN PRODUCTO POR SLUG Y MOSTRARLO EN LA PAGINA CORRESPONDIENTE DE PRODUCTPAGE

export const getProductBySlug = async( slug: string ): Promise<IProduct | null> => {


await db.connect();
const product = await Product.findOne({slug}).lean();
await db.disconnect();


if (!product) {
    return null
}


return JSON.parse(JSON.stringify(product))
}



interface ProductSlug {
    slug: string;
}


export const getAllProductSlugs = async(): Promise<ProductSlug[]> => {


    await db.connect();
    const slugs = await Product.find().select('slug -_id').lean();
    await db.disconnect();


    return slugs

}


export const getProductsByTerm = async(term: string): Promise<IProduct[]> => {


    term = term.toString().toLowerCase(); // TODOS LOS TAGS QUE MANEJAMOS ESTAN EN MINUSCULAS


    await db.connect();
    const products = await Product.find({
        // PARA ESTA CONDICION NECESITO CREAR UN INDICE QUE ME AYUDE A CONECTAR DOS CAMPOS (EN EL MODELO DE PRODUCTOS)

        $text: { $search: term }

    })
    .select("title images price inStock slug -_id")
    .lean();
    await db.disconnect();

    return products;

}


export const getAllProducts = async(): Promise<IProduct[]> => {

    await db.connect();
    const products = await Product.find()
    .select('title images price inStock slug -_id')
    .lean() 

    await db.disconnect();


    return products;

}