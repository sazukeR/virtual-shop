import {  NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../database";
import { User } from "../../../../../models";
import bcrypt from 'bcryptjs';
import { jwt } from "@/utils";
import { isValidToken } from "@/utils/jwt";


export function GET(request: NextRequest) {

   if (request.method === "GET") return checkJWT(request); 
    
        return NextResponse.json({
            message: "Bad Request"
        }, {status: 400});
}

async function checkJWT(request: NextRequest) {

    const token: string = (request.cookies.get("token")?.value || "") as string

    let userId = ""


    try {
        userId = await isValidToken(token)
    } catch (error) {
        return NextResponse.json({
            message: "Token de autorizacion no es valido"
        }, {status: 400})
    }

    db.connect();
    const user = await User.findById(userId).lean();
    db.disconnect()

    if (!user) return NextResponse.json({
        message: "No existe usuario con ese id"
    },{status: 400})


    const { _id, email, role, name } = user

    return NextResponse.json({
        token: jwt.signToken(_id, email),
        user: {
            email,
            role,
            name,
        }
    }, {status: 200})



 

}
