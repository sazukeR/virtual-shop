import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../database";
import { Product } from "../../../../../models";


export async function GET(request: NextRequest, {params}: { params: { slug: string } }) {

    if (request.method === "GET") {

        const {slug} = params;

        console.log(slug);

        await db.connect();
        const product = await Product.findOne({slug})
        .lean() 
        await db.disconnect();


        if (!product) {
            return NextResponse.json( {
                message: "Producto no encontrado"
            }, {status: 404});
        }

        return NextResponse.json( product, {status: 200});
    }
    else {

        return NextResponse.json( {
            message: "Bad Request"
        }, {status: 400});
    }
}

