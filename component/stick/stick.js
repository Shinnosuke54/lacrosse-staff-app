import Link from "next/link";
import styles from "./stick.module.css"

export default function Stick({stick}){
    return (
        // <Link href={`/posts/${post.id}`}>
        <div className={styles.card}>
            <h2>NAME : {stick.player}</h2>
            <h2>深さ : {stick.depth}</h2>
            <h2>ひも : {stick.string}</h2>
            <h2>エンド : {stick.end}</h2>
            <h2>ボール : {stick.ball}</h2>
            <h2>長さ : {stick.length}</h2>
            <h2>横幅 : {stick.narrow}</h2>
            <h2>縦幅 : {stick.height}</h2>
        </div>
        
        
        // </Link>
    )
}