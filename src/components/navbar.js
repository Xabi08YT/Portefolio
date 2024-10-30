import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {FolderGit2, GraduationCap, House, Languages, Menu, SearchIcon} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Separator} from "@/components/ui/separator";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
    const [langs, setLangs] = useState([]);
    const [isClient, setClient] = useState(false);

    let chooseLanguage = () => {
    }

    useEffect(() => {
        setClient(true);
        fetch("/api/v1/getAllLanguages").then(resp => resp.json()).then(data => setLangs(data));
    }, [])
    return (
        <div className="text-white w-full h-full backdrop-blur">
            <div className="hidden sm:flex justify-between">
                <NavigationMenu className="w-screen text-white py-[5px] hidden sm:block">
                    <NavigationMenuList className="">
                        <NavigationMenuItem className="">
                            <Link href="/" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><House
                                className="mr-[5px]"/> Accueil</NavigationMenuLink></Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <Link href="/projects" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><FolderGit2
                                className="mr-[5px]"/> Projets</NavigationMenuLink></Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <Link href="/diplomas" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><GraduationCap
                                className="mr-[5px]"/> Diplomes</NavigationMenuLink></Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu className="w-screen text-white py-[5px] hidden sm:block">
                    <NavigationMenuList className="">
                        <NavigationMenuItem className="">
                            <Link href="/search" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><SearchIcon
                                className="mr-[5px]"/> Rechercher</NavigationMenuLink></Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <NavigationMenuTrigger className="align-top blurred"><Languages
                                color="white" className="mr-[5px]"/> Langages</NavigationMenuTrigger>
                            <NavigationMenuContent className="">
                                {langs.length === 0 ? (
                                    <NavigationMenuLink>Loading</NavigationMenuLink>) : langs.map((value) => {
                                    let wrapper = chooseLanguage(value.shortCode);
                                    return (<NavigationMenuItem key={value.id}>
                                        <Button className={`${navigationMenuTriggerStyle()} text-white`}
                                                onClick={wrapper}>
                                            <Image
                                                src={value.flagurl} alt={value.shortCode} width="32"
                                                height="32"/> {value.name}
                                        </Button>
                                    </NavigationMenuItem>)
                                })}
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex justify-between sm:hidden text-2xl p-[5px]">
                <DropdownMenu className="burredSurface">
                    <DropdownMenuTrigger className="burredSurface p-[5px]"><Menu/></DropdownMenuTrigger>
                    <DropdownMenuContent className="burredSurface">
                        <DropdownMenuLabel className="burredSurface">Naviguer</DropdownMenuLabel>
                        <Separator orientation="horizontal"/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="burredSurface"><House/> Accueil</DropdownMenuItem>
                            <DropdownMenuItem className="burredSurface"><FolderGit2/> Projets</DropdownMenuItem>
                            <DropdownMenuItem className="burredSurface"><GraduationCap/> Diplomes</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <Separator orientation="horizontal"/>
                        <DropdownMenuGroup>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger><Languages/> Langages</DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                    {langs.length === 0 ? (
                                        <DropdownMenuItem>Loading...</DropdownMenuItem>) : langs.map((value) => {
                                        let wrapper = chooseLanguage(value.shortCode);
                                        return (<DropdownMenuItem key={value.id} onClick={wrapper}>
                                            <Image src={value.flagurl} alt={value.shortCode} width="24" height="24"/> {value.name}
                                        </DropdownMenuItem>);
                                    })}
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/search">
                    <SearchIcon className="mt-[5px] mr-[5px]"/>
                </Link>
            </div>
        </div>)
}