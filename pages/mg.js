import Head from 'next/head'
import styles from '../styles/Tr.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import Post from '../component/post/post'


export default function Tr() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trainer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            MANAGERS
        </h1>

        <div className={styles.grid}>
          <div href="https://nextjs.org/docs" className={styles.card}>
            <h2>メニュー管理</h2>
            <li><Link href="mg/menu-output">閲覧</Link></li>            
            <li><Link href="mg/menu-input">入力</Link></li>            
          </div>

          <div href="https://nextjs.org/learn" className={styles.card}>
            <h2>クロスチェック</h2>
            <li><Link href="mg/stick-output">閲覧</Link></li>
            <li><Link href="mg/stick-input">入力</Link></li>
          </div>

          <div
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>スタッツ管理</h2>
            <li><Link href="mg/stat-output">閲覧</Link></li>
            <li><Link href="mg/stat-input">入力</Link></li>
          </div>

        </div>
      </main>

    </div>
  )
}