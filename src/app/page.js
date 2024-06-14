import Image from "next/image";
import styles from "./page.module.css";
import Description from "@/components/description";
import { getShowableLangs } from "@/modules/getShowableLangs";
import { redirect } from "next/navigation";
import { getAllLangllabel } from "@/modules/database";
import Projects from "@/components/projects";
import Navbar from "@/components/navbar";
import Link from "next/link";
import RecommLettersContainer from "@/components/recommLettersContainer";
import DiplomasContainer from "@/components/diplomas";

// Generating a list of valid langage to make sure that we can fetch the database later
let validLang = await getAllLangllabel().then((response) => {
  return JSON.parse(response);
}).then((data) => {
  let valid = [];
  data.forEach((element) => {
    valid.push(element.llabel);
  })
  return valid;
}).catch((e) => {
  throw e;
});

//Rendering content
export default function Home({ searchParams }) {
  //Checking langage, if no valid langage found, redirecting by default to french langage
  if (searchParams.lang == null || searchParams.lang == undefined || validLang.indexOf(searchParams.lang) == -1) {
    redirect("/?lang=fr");
  }
  return (
    <main className={styles.main}>
      <Navbar langs={getShowableLangs(searchParams.lang)} className={styles.navbar} />
      <div className={`${styles.content}`}>
        <section name="aboutme" id={styles.aboutme} className={`${styles.section}`}>
          <Image
            src="/moi.jpeg"
            alt="TMP"
            className="rounded-full w-[256px] h-[256px]"
            width="256"
            height="256"
          />
          <h1>Xabi GOÏTY</h1>
          <Description lang={searchParams.lang} />
          <Link href="#projects"><Image
            src="/arrow_down_large.svg"
            alt="DownBTN"
            width="64"
            height="64"
            id={styles.arrowDown}
            className="animate-bounce"
          />
          </Link>
        </section>
        <section name="projects" id={styles.projects} className={`${styles.section} pt-16`}>
          <Projects lang={searchParams.lang} />
        </section>
        <section name="letrecom" id={styles.letrecom} className={`${styles.section} pt-16`}>
          <RecommLettersContainer />
        </section>
        <section name="diplomas" id={styles.diplomas} className={`${styles.section} pt-16`}>
          <DiplomasContainer />
        </section>
      </div>
      <section name="footer" className={`${styles.footer} flex flex-col justify-center w-[100%]`}>
        <div className="max-w-[650px] self-center justify-self-center">
          <h1 className="font-bold text-2xl">Copyrights Xabi GOÏTY (c) 2024: All rights reserved.</h1>
          <h2 className="font-bold text-xl mt-5 max-w-25">Special mentions concerning UI Modules</h2>
          <p className="max-w-25">All UI modules on this website are coming from the shadcn-ui project.</p>
          <Link href="https://ui.shadcn.com/" target="_blank" className="italic">See project</Link>
          <h2 className="font-bold text-xl mt-5 max-w-25">Special mentions concerning images</h2>
          <p>All images are from me except the one detailed within the next section. Therefore, they are all under copyright and shall not be used anywhere without my written agreement.</p>
          <h2 className="font-bold text-xl mt-5">Special mentions concerning Icons</h2>
          <p>All icons are in the svg format and are taken from free of right repos like svgrepo.com.</p>
          <h2 className="font-bold text-xl mt-5">Special mentions concerning Data</h2>
          <p>The data that are showed on this website are personnal data which are self-hosted. Any copy, storage or usage without my written agreement is prohibited. This also apply in buisness communication. </p>
          <h2 className="font-bold text-xl mt-5">Special mentions concerning the source code</h2>
          <p>The code is under the MIT License and can be used everywhere. #OpensourceForever</p>
          <p className="max-w-"> Copyright © Xabi GOÏTY

            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            The Software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.</p>
        </div>
      </section>
    </main>
  );
}