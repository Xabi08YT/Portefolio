import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Link from "next/link";

export default function RecommLettersContainer() {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <Link href="/Recommandation_XG.pdf" target="_blank" className="flex justify-center">
                        <Image 
                            alt="RecomLetter1"
                            height="865"
                            width="854"
                            src="/RecommXG.png"
                            className="h-[90wh]"
                        />
                    </Link>
                </CarouselItem>
            </CarouselContent>
            <CarouselNext/>
            <CarouselPrevious/>
        </Carousel>
    );
}