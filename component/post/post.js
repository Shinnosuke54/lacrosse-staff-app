import Link from "next/link";
import styles from "./post.module.css"

export default function Post({post}){
    return (
        // <Link href={`/posts/${post.id}`}>
        <div className={styles.card}>
            <h2>{post.title}</h2>
            <img src={post.image} width={150} height={150} /> 
            <p>{post.content}</p>       
        </div>
        
        
        // </Link>
    )
}