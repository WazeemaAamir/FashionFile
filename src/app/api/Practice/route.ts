import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const redirectUrl = body.email === "user@example.com" ? "/dashboard" : "/home";
        return NextResponse.json({ redirectUrl });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
};
