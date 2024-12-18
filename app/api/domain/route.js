import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Supabase Methods
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_ANON
);

const tableName = "domains"

async function getDomainData(domain, cols) {
    try {
        const { data, error, status } = await supabase
            .from(tableName)
            .select(cols)
            .eq('domain', domain)
            .maybeSingle();

        if (error && status !== 406) {
            console.log(domain, error)
            return {
                error: true,
                data: null
            }
        }

        return {
            error: false,
            data
        }        
    } catch (error) {
        console.log(domain, error)
        return {
            error: true,
            data: null
        }
    }
}


async function updateDomainData({domain, data, theme}) {
    // remove null properties for the update
    const obj = {domain, data, theme};
    const cleanData = Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value != null)
    );

    try {
        const { error } = await supabase
            .from(tableName)
            .upsert(cleanData)

        if (error) {
            console.log(domain, error)
            return {
                error: true,
                data: null
            }
        }

        return {
            error: false,
            data: ""
        }        
    } catch (error) {
        console.log(domain, error)
        return {
            error: true,
            data: null
        }
    }
}

export async function GET(req) {
    const { searchParams} = new URL(req.url);
    const result = await getDomainData(
        searchParams.get("d"), 
        searchParams.get("c")
    )
    return NextResponse.json(result)
}

export async function POST(req) {
    const data = await req.json();
    const result = await updateDomainData(data)
    return NextResponse.json(result)
}