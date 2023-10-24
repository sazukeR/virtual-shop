import { NextResponse } from "next/server";
import { db } from "../../../../../database";
import { Product } from "../../../../../models";

export async function GET(request: Request, {params}: { params: { q: string } }) {

    if(request.method == 'GET') {

        let {q = ""} = params;

        if(q.length === 0) {
            return NextResponse.json({
                message: "Debe especificar el query de busqueda"
            },{status: 400});
        }
        
        q = q.toString().toLowerCase(); // TODOS LOS TAGS QUE MANEJAMOS ESTAN EN MINUSCULAS


        await db.connect();
        const products = await Product.find({
            // PARA ESTA CONDICION NECESITO CREAR UN INDICE QUE ME AYUDE A CONECTAR DOS CAMPOS (EN EL MODELO DE PRODUCTOS)

            $text: { $search: q }

        })
        .select("title images price inStock slug -_id")
        .lean();
        await db.disconnect();

        return NextResponse.json(products,{status: 200});

    } else {

        return NextResponse.json({
            message: "Bad Request"
        },{status: 400});

    }
} 