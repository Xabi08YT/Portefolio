import Link from "next/link";
import Image from "next/image";
import { getRetexFromID, getProgLang } from "@/modules/database";
import styles from "@/app/retex.module.css";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "./ui/separator";


export default async function Retex({ dbid, lang }) {
    let retex = await getRetexFromID(lang, dbid).then((response) => {
        return JSON.parse(response);
    }).then((data) => {
        return data[0];
    }).catch((e) => {
        console.log(e);
    })

    let plangs = await getProgLang(dbid).then((response) => {
        return JSON.parse(response);
    }).then((data) => {
        let datas = []
        data.forEach(element => {
            datas.push(element.pdpname);
        });
        return datas;
    }).catch((e) => {
        console.log(e);
    })

    plangs = plangs.map(plang => <li className={styles.plang}>
        <Image alt="codeicon" src="/code-icon.svg" height="28" width="28" className={styles.plangicon} />
        {plang}
    </li>);
    let tools = retex.ctools.split(',').map(tool => <li className={styles.tolItm}>
        <Image alt="toolicon" src="/settings-line-icon.svg" height="28" width="28" className={styles.plangicon} />
        {tool}
    </li>);
    let advs = retex.cadv.split(',').map(adv => <li className={styles.advItm}>
        <Image alt="toolicon" src="/small-check-mark-icon.svg" height="28" width="28" className={styles.icon} />
        {adv}
    </li>);
    let incs = retex.cinc.split(',').map(inc => <li className={styles.incItm}>
        <Image alt="toolicon" src="/cross-icon.svg" height="28" width="28" className={styles.icon} />
        {inc}
    </li>);
    let cskills;
    if (!retex.cskills == undefined || !retex.cskills == null) {
        cskills = retex.cskills.split(',').map(inc => <Badge variant="default">{inc}</Badge>);
    }
    /*return (
        <div className={styles.wrapper}>
            <h2>{retex.cname}</h2>
            <h3>{cskills}</h3>
            <p>{retex.cdesc}</p>
            <div className={styles.zone2}>
                <div className={styles.vertical2container}>
                    <ul className={styles.plangs}>
                        {plangs}
                    </ul>
                </div>
                <div className={styles.vertical2container}>
                    <ul className={styles.tools}>
                        {tools}
                    </ul>
                </div>
            </div>
            <div className={styles.zone3}>
                <ul className={styles.advs}>
                    {advs}
                </ul>
                <ul className={styles.incs}>
                    {incs}
                </ul>
            </div>
            <div>
                <p>{retex.cdate}</p>
                <span>
                    <Link href=""></Link>
                    <button>WIP</button>
                </span>
            </div>
        </div>
    );*/

    let date = retex.cdate.split('T')[0];

    return (<Card className={styles.card}>
        <ScrollArea className="h-[100%] w-[100%r] rounded-md border p-4">
            <CardHeader>
                <CardTitle>{retex.cname}</CardTitle>
                <CardDescription>{retex.cdesc}</CardDescription>
                <p>{cskills}</p>
            </CardHeader>
            <CardContent className="flex flex-col justify-items-stretch">
                <div className={styles.zone2}>
                    <div className={styles.vertical2container}>
                        <ul className={styles.plangs}>
                            {plangs}
                        </ul>
                    </div>
                    <div className={styles.vertical2container}>
                        <ul className={styles.tools}>
                            {tools}
                        </ul>
                    </div>
                </div>
                <div className={styles.zone3}>
                    <ul className={styles.advs}>
                        {advs}
                    </ul>
                    <ul className={styles.incs}>
                        {incs}
                    </ul>
                </div>
                <p>{`${date.split('-')[2]}/${date.split('-')[1]}/${date.split('-')[0]}`}</p>
            </CardContent>
            <CardFooter className="flex justify-evenly">
                <Link href={retex.cextlink} target="_blank">Page du projet</Link>
            </CardFooter>
        </ScrollArea>
    </Card>)

}
/*<button>Exporter en PDF</button>*/
