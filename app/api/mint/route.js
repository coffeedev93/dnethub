import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const tableName = "domains"
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_ANON
);

async function mintAndTransfer(data) {
    // associate token in client

    // upload json to ipfs

    // mint and transfer nft

    // update supabase

    return {}
}

export async function POST(req) {
    const data = await req.json();
    const result = await mintAndTransfer(data)
    return NextResponse.json(result)
}