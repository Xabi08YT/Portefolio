import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

export default function DiplomasContainer() {
    return (
        <Carousel>
            <CarouselContent className="h-[80vh]">
                <CarouselItem>
                    <div className="flex flex-col justify-center">
                        <h1>Diplome du Baccalauréat général</h1>
                        <a href="/bacScan.jpg" className="self-center" target="_blank"><Image src="/bacScan.jpg" alt="Scan bac" width="1024" height="732" /></a>
                    </div>
                </CarouselItem>
                <CarouselItem className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center">
                        <h1>Diplome d&apos;Allemand niveau B1</h1>
                        <a href="/kmkScan.jpg" className="self-center" target="_blank"><Image src="/kmkScan.jpg" alt="Scan diplome kmk" width="713" height="1024" className="max-h-[713px] max-w-[496px]"/></a>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    );
}
