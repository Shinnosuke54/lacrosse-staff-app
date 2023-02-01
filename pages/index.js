import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Tr.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from 'next-auth/react'
import logo_1 from '../public/logo_1.png'

export default function Home() {

  const {data: session} = useSession()

  function handleSignOut(){
    signOut()
  }

  return (
    <div>
      <Head>
        <title>Keio Men&apos;s Lacrosse</title>
      </Head>

      {session ? User({session, handleSignOut}) : Guest()}
    </div>
  )
}

function Guest() {
  return(
    <main>
      <div>
        You should 
        <Link href='/login' className={styles.login_link}> sign in </Link>
        or
        <Link href='/register' className={styles.login_link}> register </Link>.
      </div>
    </main>
  )
}


//ここにログイン後のメインページを置く
function User({session, handleSignOut}) {
  return(
    <div className={styles.relay_main}>
            <Head>
                <title>Keio Men&apos;s Lacrosse</title>
            </Head>
            <header className={styles.header}>
                <Image className={styles.logo_1} src={logo_1} quality={100} alt='logo_1' />
            </header>
            <h1 className={styles.relay_title}>
                for Staff
            </h1>

            <div className={styles.relay_grid}>
                <Link className={styles.relay_card} href='./tr'>
                        <h2>for Trainers</h2>
                </Link>
                
                <Link className={styles.relay_card} href='./mg'>
                        <h2>for Managers</h2>
                </Link>
                <h3 onClick={handleSignOut} className={styles.signout}>
                  Sign Out
                </h3>
            </div>
    </div>
  )
}

export async function getServerSideProps({req}) {
  const session = await getSession({req})

  if(!session){
    return{
      redirect:{
        destination:'/login',
        permanent: false
      }
    }
  }

  return {
    props: {session}
  }
}