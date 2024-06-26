import Head from "next/head";
 import { Inter } from "next/font/google";

 import SideBarDashboard from "@/component/sidebar/sidebar";

 import AdminProjet from "@/component/projet/adminprojet";
import Tour from "@/component/tour";
 
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Projet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      </Head>
    <main style={{padding:'0',background:"#f5f5f5"}}>
<div id="viewport">   <SideBarDashboard/>
<Tour/>     <AdminProjet/>
</div>
       </main>
    </>
  );
}
