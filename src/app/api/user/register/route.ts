import {  NextResponse } from "next/server";
import { db } from "../../../../../database";
import { User } from "../../../../../models";
import bcrypt from 'bcryptjs';
import { jwt, validations } from "@/utils";


export function POST(request: Request) {


    if (request.method === "POST") return registerUser(request); 
    
        return NextResponse.json({
            message: "Bad Request"
        }, {status: 400});
}

async function registerUser(request: Request) {
    
    const data: FormData = await request.formData();
    const name: string = (data.get("name") || "") as string;
    const email: string = (data.get("email") || "") as string;
    const password: string = (data.get("password") || "") as string;


    if (password.length < 6) return NextResponse.json({message: "La contrasena debe tener al menos 6 caracteres"}, {status: 400})


    if (name.length < 2) return NextResponse.json({message: "El nombre debe tener al menos 2 caracteres"}, {status: 400})


    if (!validations.isValidEmail(email)) return NextResponse.json({message: "Formato de correo no valido"}, {status: 400})


    db.connect();
    const user = await User.findOne({ email });
    // db.disconnect();

    if (user) return NextResponse.json({ message: "Correo ya existe" }, {status: 400})


    const newUser = new User({
        email: email.toLocaleLowerCase(),
        password: bcrypt.hashSync( password ),
        role: "client",
        name
    })


    try {
        await newUser.save({validateBeforeSave: true});
    } catch (error) {
        console.log(error)
        NextResponse.json({message: "Revisar logs del servidor"}, {status: 500})
    }


    
    const { _id, role } = newUser;

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
