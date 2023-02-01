import Link from "next/link";
import styles from "./player.module.css"

export default function Player({player}){
    return (
        // <Link href={`/posts/${post.id}`}>
        <div className={styles.card}>
            <h2>{player.name}</h2>
            <h2>GRADE : {player.grade}</h2>
        </div>
        
        
        // </Link>
    )
}