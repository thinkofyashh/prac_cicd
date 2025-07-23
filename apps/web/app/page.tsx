"use client"
import { Appbar } from "@repo/ui/Appbar";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";



  







export default   function Home() {

  const session= useSession()
  return (
    <div className={styles.page}>
     Welcome to the landing page
    </div>
  );
}
