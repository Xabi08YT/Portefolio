"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";
import {Card, CardContent, CardFooter, CardTitle} from "@/components/ui/card";
import {Code2Icon, Github, Linkedin, Mail, TriangleAlert} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="dark text-white w-full h-full bgimg">
            <Navbar/>
            <main className="w-[100vw] min-h-[90vh] flex flex-col md:flex-row justify-center">
                <Card className="w-fit p-[5px] pt-[15px] m-[15px] mt-[5.5vh] blurredSurface rounded-3xl border-0 md:justify-center md:content-center">
                    <CardTitle className="text-center flex flex-col"><Image src="/moi.jpeg" alt="me" width={240}
                                                                            height={50}
                                                                            className="self-center mb-[15px] sm:w-[240px] rounded-3xl"/> A propos
                        de moi</CardTitle>
                    <CardContent className="mb-0 pb-0 mt-[5px]">
                        <p className="text-center mb-0 pb-0">Je suis un jeune étudiant de 18 ans en BUT Informatique à l&apos;IUT de Gradignan. Je suis
                            passionné par les nouvelles technologies comme l&apos;impression 3D, l&apos;IA et la
                            cybersécurité.</p>
                    </CardContent>
                    <CardFooter className="font-bold text-center mt-[15px] mb-[5px] text-xl flex flex-col">
                        <p>Me contacter oui  plus d&apos;informations</p>
                        <Link href="https://www.linkedin.com/in/xabi-goity/" className="flex font-normal" target="_blank"><Linkedin className="mr-[5px]" />Linkedin</Link>
                        <Link href="https://github.com/Xabi08YT" className="flex font-normal" target="_blank"><Github className="mr-[5px]"/>Github</Link>
                        <Link href="mailto:xabigoity@gmail.com" className="flex font-normal" target="_blank"><Mail className="mr-[5px]"/> Email</Link>
                    </CardFooter>
                </Card>
                <Card className="w-fit p-[5px] pt-[15px] m-[15px] mt-[5.5vh] blurredSurface rounded-3xl border-0">
                    <CardTitle className="text-center hidden md:flex flex-col"><Code2Icon className="self-center size-16"/> Mes langages de programmation</CardTitle>
                    <CardContent className="mb-0 pb-0 mt-[5px] text-white hidden md:block">
                        <iframe width="600" height="600"
                                src="https://ionicabizau.github.io/github-profile-languages/api.html?@Xabi08YT" style={{color: "white !important"}}
                                frameBorder="0" className="invert" ></iframe>
                    </CardContent>
                    <CardTitle className="flex md:hidden text-center justify-center content-center">
                        <TriangleAlert className="mr-[5px] self-center" size="100"/>
                        <p>Certaines informations n&apos;ont pu être affichées a cause de la taille de votre écran.</p>
                    </CardTitle>
                </Card>
            </main>
        </div>
    );
}