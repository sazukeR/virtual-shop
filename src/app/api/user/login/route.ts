import {  NextResponse } from "next/server";
import { db } from "../../../../../database";
import { User } from "../../../../../models";
import bcrypt from 'bcryptjs';
import { jwt } from "@/utils";


export function POST(request: Request) {


    if (request.method === "POST") return loginUser(request); 
    
        return NextResponse.json({
            message: "Bad Request"
        }, {status: 400});
}

async function loginUser(request: Request) {
    
    const data: FormData = await request.formData();
    const email: string = (data.get("email") || "") as string;
    const password: string = (data.get("password") || "") as string;

    db.connect();
    const user = await User.findOne({ email });
    db.disconnect();

    if (!user) return NextResponse.json({ message: "Correo o contrasena no validos - correo" }, {status: 400})

    if (!bcrypt.compareSync( password ,user.password! )) return NextResponse.json({ message: "Correo o contrasena no validos - contrasena" }, {status: 400})

 
    const { role, name, _id } = user;


    const token = jwt.signToken(_id, email) // ESTA ES LA FUNCION DEFINIDA EN UTILS/JWT QUE NOS AYUDA A CREAR NUESTRO TOKEN, LE ENVIAMOS EL _ID DE LA BASE DE DATOS Y EL EMAIL DEL REQUEST... UNA VEZ CREADO NUESTRO TOKEN LO GUARDAMOS EN LA RESPUESTA.

    return NextResponse.json({
        token,
        user: {
            email,
            role,
            name,
        }
    }, {status: 200})

 

}
