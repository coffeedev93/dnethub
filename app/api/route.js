import { NextResponse } from "next/server";

export async function POST(req) {
    const {fname, data} = await req.json();
    let result = null;
    
    if (fname === "create") {
        //result = await create(data)
        result = { fname, success: true }
    }
    if (fname === "deploy") {
        //result = await deploy(data)
        result = { fname, success: true }
    }

    return NextResponse.json(result)
}