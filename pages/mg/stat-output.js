import React from "react"
import Shot from "../../component/shot/shot"
import { getAllShotsData } from "../../component/lib/shots"
import styles from "./mg.module.css"
import Link from "next/link"

export default function shotOutput( { shots } ){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                STATS
            </h1>
            <h2 className={styles.subtitle}><Link href="./stat-input">ADD</Link></h2>

            <div className={styles.main}>
                {shots[0].map((shot) => <Shot key={shot.id} shot = {shot} />)}
            </div>
            
        </div>
        
    )
}

// <Post key={post.id} post = {post} />
export async function getStaticProps() {
    const shots = await getAllShotsData();
    return {
        props: {shots},
        revalidate: 3,
    };
}