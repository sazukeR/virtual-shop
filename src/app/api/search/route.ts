import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: "Not-found Debe especificar el query de busqueda"
    },{status: 400})
}