import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Languages, SearchIcon} from "lucide-react";

export default function Navbar() {
    return (
        <div className="dark text-white w-full h-full">
            <NavigationMenu className="w-screen dark text-white pt-[5px] hidden sm:block">
                <NavigationMenuList className="w-screen">
                    <NavigationMenuItem className="flex items-center justify-between w-full align-middle">
                        <div>
                            <Link href="/" legacyBehavior passHref><NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>Accueil</NavigationMenuLink></Link>
                            <Link href="/projects" legacyBehavior passHref><NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>Projets</NavigationMenuLink></Link>
                            <Link href="/diplomas" legacyBehavior passHref><NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>Diplomes</NavigationMenuLink></Link>
                        </div>
                        <div>
                            <Link href="/search" legacyBehavior passHref><NavigationMenuLink
                                className={navigationMenuTriggerStyle()}><SearchIcon/></NavigationMenuLink></Link>
                            <NavigationMenuTrigger className="align-top"><Languages
                                color="white"/></NavigationMenuTrigger>
                            <NavigationMenuContent>
                            </NavigationMenuContent>
                        </div>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>)
}