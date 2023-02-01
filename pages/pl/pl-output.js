import React from "react"
import Player from "../../component/player/player"
import { getAllPlayersData } from "../../component/lib/players"
import styles from "./pl.module.css"
import Link from "next/link"

export default function playersOutput( { players } ){
    // console.log(posts)
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>PLAYERS</h1>
            <h2 className={styles.subtitle}><Link href="./pl-input">ADD</Link></h2>

            <div className={styles.main}>
                {players[0].map((player) => <Player key={player.id} player = {player} />)}
            </div>
            
        </div>
        
    )
}

// <Post key={post.id} post = {post} />
export async function getStaticProps() {
    const players = await getAllPlayersData();
    return {
        props: {players},
        revalidate: 3,
    };
}