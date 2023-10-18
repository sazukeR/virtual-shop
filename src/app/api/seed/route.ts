import { NextResponse } from 'next/server'

type Data = {
    message: string
}

export function GET(): NextResponse<Data> {
    return NextResponse.json({
         message: 'Proceso realizado correctamente',
        })
}