import {NextResponse} from "next/server";
import {getAllLang} from "@/modules/database";

export async function GET(req, rs) {
    let res = await getAllLang();
    return new NextResponse(JSON.stringify(res))
}