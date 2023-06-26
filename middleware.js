/* This middleware file handles all CORS rules on API routes */

import { NextResponse } from "next/server";

export function middleware(request){
    const origin = request.headers.get('origin');
    console.log(origin);

    const response = NextResponse.next();
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400");

    console.log('***Middleware Call***');
    console.log(request.method);
    console.log(request.url);
    console.log('***End of Middleware Call***');

    return response;
}

export const config = {
    matcher: '/api/:path*',
};