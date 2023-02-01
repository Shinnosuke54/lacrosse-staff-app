import React from "react"
import Stick from "../../component/stick/stick"
import { getAllSticksData } from "../../component/lib/sticks"
import styles from "./mg.module.css"
import Link from "next/link"

export default function stickOutput( { sticks } ){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                STICK LOG
            </h1>
            <h2 className={styles.subtitle}><Link href="./stick-input">ADD</Link></h2>

            <div className={styles.main}>
                {sticks[0].map((stick) => <Stick key={stick.id} stick = {stick} />)}
            </div>
            
        </div>
        
    )
}

// <Post key={post.id} post = {post} />
export async function getStaticProps() {
    const sticks = await getAllSticksData();
    return {
        props: {sticks},
        revalidate: 3,
    };
}