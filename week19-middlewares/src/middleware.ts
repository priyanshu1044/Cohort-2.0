import { NextRequest, NextResponse } from "next/server";

let reqCount=0;
export function middleware(req:NextRequest,res:NextResponse){
    reqCount++;
    const resp=NextResponse.next();
    console.log("reqcount"+reqCount)
    return resp; 
}

export const config={
    // restrict the middleware to only for /api/all_paths route
    matcher: '/api/:path*'
}