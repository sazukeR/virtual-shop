import { NextResponse } from 'next/server'
import { db, seedDatabase } from '../../../../database'
import { Product } from '../../../../models'

/* type Data = {
    message: string
} */

export async function GET() {



    if(process.env.NODE_ENV === "production") {
    return NextResponse.json({
        message: "No tiene acceso a este API"
    },{status: 401})    
    }

    await db.connect()

    await Product.deleteMany() //POR SI ACASO HICE ALGUNA MODIFICACION PURGAR LA BASE DE DATOS SOLO EN LA COLECCION DE PRODUCTOS

    await Product.insertMany( seedDatabase.initialData.products );

    await db.disconnect();


    return NextResponse.json({
         message: 'Proceso realizado correctamente',
        }, {status: 200})
}



