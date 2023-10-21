import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: { params: { q: string } }) {

    if(request.method == 'GET') {

        let {q = ""} = params;

        if(q.length === 0) {
            return NextResponse.json({
                message: "Debe especificar el query de busqueda"
            },{status: 400});
        }
        
        return NextResponse.json({
            message: "hellooo"
        },{status: 200});

    }

    return NextResponse.json({
        message: "Bad Request"
    },{status: 400});
}