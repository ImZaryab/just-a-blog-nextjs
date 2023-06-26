import { NextResponse } from "next/server";
import { fetchPages } from "../../../lib/notionFunctions.js"

export async function GET(){

    const blogsArray = await fetchPages();

    return NextResponse.json({ response: blogsArray }, { status: 200 });
}