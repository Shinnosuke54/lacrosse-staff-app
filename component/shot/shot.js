import Link from "next/link";
import styles from "./shot.module.css"

export default function Shot({shot}){
    return (
        // <Link href={`/posts/${post.id}`}>
        <div className={styles.card}>
            <h2>{shot.player}</h2>
            <h2>SCORE : {shot.score}</h2>
            <h2>GB : {shot.gb}</h2>
            <h2>BD : {shot.bd}</h2>
            <h2>PC : {shot.pc}</h2>
            <h2>SHOTS : {shot.shot_all}本 {shot.score}/{shot.shot_in}</h2>
        </div>
        
        
        // </Link>
    )
}