import {NextResponse} from "next/server";
import {getAllLang, login, register} from "@/modules/database";

export async function GET(req, rs) {
    let res = await register("Xabi08","Xabi2006__");
    return new NextResponse(JSON.stringify(res))
}