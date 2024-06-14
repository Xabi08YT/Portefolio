import { getAllRetexIds } from "@/modules/database";
import Retex from "./retex";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import styles from "@/app/page.module.css";

export default async function Projects({ lang }) {
    let allRetexs = [];
    let error = false;
    let errcode;
    await getAllRetexIds(lang).then((response) => {
        return JSON.parse(response);
    }).then((data) => {
        data.forEach(element => {
            allRetexs.push(<CarouselItem className="sm:basis-1/1  md:basis-1/2 lg:basis-1/3"><Retex dbid={element.cid} lang={lang} /></CarouselItem>);
        });
        return allRetexs;
    }).catch((e) => {
        console.log(e);
        error = true;
        errcode = e.message;
    });
    if (error) {
        return (<div>An error occured while fetching the database. Error code: {errcode}</div>)
    }
    return (<Carousel>
        <CarouselContent>
            {allRetexs}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>);
}