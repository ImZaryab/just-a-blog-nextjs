import { NextResponse } from "next/server";
import { fetchPageBlocks, fetchPageBySlug, notion } from "../../../lib/notionFunctions.js";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

export async function POST(request){
    const { slug } = await request.json();
    const blogpost = await fetchPageBySlug(slug);
    if(!blogpost) notFound();

    const blocks = await fetchPageBlocks(blogpost.id);

    const renderer = new NotionRenderer({
        client: notion,
    })

    const html = await renderer.render(...blocks);

    return NextResponse.json({ response: html }, { status: 200 });
}