
import { getAllLang } from "@/modules/database";

export async function getShowableLangs({ lang }) {
    let allLang = [];
    let error = false;
    let errcode;
    await getAllLang().then((response) => {
        return JSON.parse(response);
    }).then((data) => {
        allLang = data;
        return allLang;
    }).catch((e) => {
        console.log(e);
        error = true;
        errcode = e.message;
    });
    if (error) {
        return "An error occured while fetching the database. Error code: "+errcode;
    }
    return allLang
}