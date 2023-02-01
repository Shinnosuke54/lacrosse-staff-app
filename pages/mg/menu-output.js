import React from "react"
import Menu from "../../component/post/post"
import { getAllMenusData } from "../../component/lib/menus"
import styles from "./mg.module.css"
import Link from "next/link"

export default function menuOutput( { menus } ){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                PRACTICE MENU
            </h1>
            <h2 className={styles.subtitle}><Link href="./menu-input">ADD</Link></h2>

            <div className={styles.main}>
                {menus[0].map((post) => <Menu key={post.id} post = {post} />)}
            </div>
            
        </div>
        
    )
}

// <Post key={post.id} post = {post} />
export async function getStaticProps() {
    const menus = await getAllMenusData();
    return {
        props: {menus},
        revalidate: 3,
    };
}