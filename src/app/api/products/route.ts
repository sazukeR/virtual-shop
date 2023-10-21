import {  NextResponse } from "next/server";
import { db, SHOP_CONSTANTS } from "../../../../database";
import { Product } from "../../../../models";

import { URL } from "url";













export async function GET(request: Request) {



if (request.method === "GET") return getProducts(request); 

    return NextResponse.json({
        message: "Bad Request"
    }, {status: 404});
}

const getProducts = async(request: Request) => {

    const url = new URL(request.url)
    const gender = url.searchParams.get("gender") || "all"
    
     let condition = {}

    if (gender !== "all" && SHOP_CONSTANTS.validGenders.includes(gender)) {
        condition = {gender}
    }

    await db.connect();
    const products = await Product.find(condition)
    .select('title images price inStock slug -_id')
    .lean() 

    await db.disconnect();

    return NextResponse.json(products, {status: 200})
}