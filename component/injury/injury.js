import Link from "next/link";
import styles from "./post.module.css"

export default function Post({post}){
    return (
        // <Link href={`/posts/${post.id}`}>
        <div className={styles.card}>
            <h2>{post.player}</h2>
            <h2>{post.body}</h2>
            <p>{post.status}</p>       
        </div>
        
        
        // </Link>
    )
}