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

export default function Navbar() {
    return (
        <div className="text-white w-full h-full backdrop-blur">
            <NavigationMenu className="w-screen text-white py-[5px] hidden sm:block">
                <NavigationMenuList className="w-screen">
                    <NavigationMenuItem className="flex items-center justify-between w-full align-middle">
                        <div>
                            <Link href="/" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><House className="mr-[5px]"/> Accueil</NavigationMenuLink></Link>
                            <Link href="/projects" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><FolderGit2 className="mr-[5px]"/> Projets</NavigationMenuLink></Link>
                            <Link href="/diplomas" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><GraduationCap className="mr-[5px]"/> Diplomes</NavigationMenuLink></Link>
                        </div>
                        <div>
                            <Link href="/search" legacyBehavior passHref><NavigationMenuLink
                                className={`${navigationMenuTriggerStyle()} blurred`}><SearchIcon className="mr-[5px]"/> Rechercher</NavigationMenuLink></Link>
                            <NavigationMenuTrigger className="align-top blurred"><Languages
                                color="white" className="mr-[5px]"/> Langages</NavigationMenuTrigger>
                            <NavigationMenuContent>
                            </NavigationMenuContent>
                        </div>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex justify-between sm:hidden text-2xl p-[5px]">
                <DropdownMenu className="burredSurface">
                    <DropdownMenuTrigger className="burredSurface p-[5px]"><Menu/></DropdownMenuTrigger>
                    <DropdownMenuContent className="burredSurface">
                        <DropdownMenuLabel className="burredSurface">Naviguer</DropdownMenuLabel>
                        <Separator orientation="horizontal" />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="burredSurface"><House/> Accueil</DropdownMenuItem>
                            <DropdownMenuItem className="burredSurface"><FolderGit2/> Projets</DropdownMenuItem>
                            <DropdownMenuItem className="burredSurface"><GraduationCap/> Diplomes</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <Separator orientation="horizontal" />
                        <DropdownMenuGroup>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger><Languages /> Langages</DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/search">
                    <SearchIcon className="mt-[5px] mr-[5px]" />
                </Link>
            </div>
        </div>)
}