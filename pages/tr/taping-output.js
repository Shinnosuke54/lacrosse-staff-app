import React from "react"
import Post from "../../component/post/post"
import { getAllPostsData } from "../../component/lib/posts"
import styles from "./trs.module.css"
import Link from "next/link"

export default function tapingOutput( { posts } ){
    // console.log(posts)
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>TAPING LOG</h1>
            <h2 className={styles.subtitle}><Link href="./taping-input">ADD</Link></h2>
            <div className={styles.main}>
                {posts[0].map((post) => <Post key={post.id} post = {post} />)}
            </div>
            
        </div>
        
    )
}

// <Post key={post.id} post = {post} />
export async function getStaticProps() {
    const posts = await getAllPostsData();
    return {
        props: {posts},
        revalidate: 3,
    };
}