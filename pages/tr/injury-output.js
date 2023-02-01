import React from "react"
import Post from "../../component/injury/injury"
import { getAllInjuriesData } from "../../component/lib/injuries"
import styles from "./trs.module.css"
import Link from "next/link"

export default function injuryOutput( { injuries } ){
    // console.log(posts)
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>INJURY LOG</h1>
            <h2 className={styles.subtitle}><Link href="./injury-input">ADD</Link></h2>
            <div className={styles.main}>
                {injuries[0].map((injury) => <Post key={injury.id} post = {injury} />)}
            </div>
            
        </div>
        
    )
}

// <Post key={post.id} post = {post} />
export async function getStaticProps() {
    const injuries = await getAllInjuriesData();
    return {
        props: {injuries},
        revalidate: 3,
    };
}