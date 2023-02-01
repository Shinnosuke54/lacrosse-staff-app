import Head from 'next/head'
import styles from '../styles/Tr.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { getSession, useSession, signOut } from 'next-auth/react'
// import Post from '../component/post/post'


export default function Trainer() {
  // const {data: session} = useSession()
  
  return(
    <div>
      <Head>
        <title>Keio Men&apos;s Lacrosse</title>
      </Head>

      {/* {session ? Tr() : Guest()} */}
    </div>
  )


}


function Tr() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Trainer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            TRAINERS
        </h1>

        <h2>
          <Link className={styles.login_link} href='/'>Back to Home</Link>
        </h2>

        <div className={styles.grid}>
          <div href="https://nextjs.org/docs" className={styles.card}>
            <h2>トレ管理</h2>
            <li>1st grade</li>
            <li>2nd grade</li>
            <li>3rd grade</li>
            <li>4th grade</li>            
          </div>

          <div href="https://nextjs.org/learn" className={styles.card}>
            <h2>怪我人管理</h2>
            <li><Link href="tr/injury-output">閲覧</Link></li>
            <li><Link href="tr/injury-input">入力</Link></li>
          </div>

          <div
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>テーピング履歴</h2>
            <li><Link href="tr/taping-output">閲覧</Link></li>
            <li><Link href="tr/injury-input">入力</Link></li>
          </div>

        </div>
      </main>

    </div>
  )
}

// function Guest() {
//   return(
//     <div></div>
//   )
// }

// export async function getServerSideProps({req}) {
//   const session = await getSession({req})

//   if(!session){
//     return{
//       redirect:{
//         destination:'/login',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {session}
//   }
// }