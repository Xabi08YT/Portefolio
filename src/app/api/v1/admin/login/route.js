import {NextResponse} from "next/server";
import {getAllLang, login} from "@/modules/database";

export async function GET(req, rs) {
    let body = await req.json();
    let res = await login(body.username, body.password);
    if(res === true){
        return NextResponse.json({valid: true}, {status: 200});
    }
    return NextResponse.json({valid: false}, {status: 403});
}