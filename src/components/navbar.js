"use client"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import LangageSubmenu from "../modules/getShowableLangs";
import Image from "next/image";

import styles from "@/app/page.module.css";
import { NavigationMenuLink } from "./ui/navigation-menu";
import Link from "next/link";

export default function navbar({ langs = [] }) {
    console.log(langs)
    let LangItems = [];

    /*langs.forEach(element => {
        console.log(element.hidden);
        if (element.hidden != 1 && lang !== element.llabel) {
            allLang.push(<NavigationMenuLink asChild className={styles.langbtn}>
                <a ref={`?lang=${element.llabel}`}>
                    <Image src={`data:image/svg+xml;utf8,${encodeURIComponent(element.limg)}`} alt={`${element.llabel}_icon`} width="32" height="20" className={styles.langicn} />
                    {element.ldisplayname}
                </a>

            </NavigationMenuLink>);
        }
        else if (element.hidden != 1) {
            allLang.push(<NavigationMenuLink asChild className={styles.currentlang}>
                <a ref={`?lang=${element.llabel}`}>
                    <Image src={`data:image/svg+xml;utf8,${encodeURIComponent(element.limg)}`} alt={`${element.llabel}_icon`} width="32" height="20" className={styles.langicn} />
                    {element.ldisplayname}
                </a>
            </NavigationMenuLink>);
        }
    });*/
    /*<NavigationMenuItem>
                        <NavigationMenuTrigger><Image src="/language-icon.svg" width="32" height="20" alt="langicon" className="invert mr-2" /> Languages</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {LangItems}
                        </NavigationMenuContent>
                    </NavigationMenuItem>*/
    return (
        <div className="dark fixed top-0 w-screen z-10 ">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Aller à</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                <li className="flex justify-center w-[100%]"><Link href="#aboutme" legacyBehavior passHref className="w-[100%]"><NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-[100%]`}>A propos</NavigationMenuLink></Link></li>
                                <li className="flex justify-center w-[100%]"><Link href="#projects" legacyBehavior passHref className="w-[100%]"><NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-[100%]`}>Mes projets</NavigationMenuLink></Link></li>
                                <li className="flex justify-center w-[100%]"><Link href="#letrecom" legacyBehavior passHref className="w-[100%]"><NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-[100%]`}>Mes lettres de recommandation</NavigationMenuLink></Link></li>
                                <li className="flex justify-center w-[100%]"><Link href="#diplomas" legacyBehavior passHref className="w-[100%]"><NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-[100%]`}>Mes diplômes</NavigationMenuLink></Link></li>
                                <li className="flex justify-center w-[100%]"><Link href="#contact" legacyBehavior passHref className="w-[100%]"><NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-[100%]`}>Me contacter</NavigationMenuLink></Link></li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>);
}
