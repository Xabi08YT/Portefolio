import { getDescription } from "@/modules/database";

export default function description({lang}) {
    let error = false;
    let errcode;
    let text = getDescription(lang).then((response) => {
        return JSON.parse(response);
    }).catch((e) => {
        console.log(e);
        error = true;
        errcode = e.message;
    });
    if (error) {
        return (<div>An error occured while fetching the database. Error code: {errcode}</div>)
    }
    return (
        <p>{text}</p>
    );
}