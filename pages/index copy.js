import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import logo_1 from '../public/logo_1.png'
import { useState } from 'react'
import { getSession, useSession, signOut } from 'next-auth/react'

export default function Home() {

  const {data: session} = useSession()

  function handleSignOut(){
    signOut()
  }

  return (
    <div>
      <Head>
        <title>Keio Men's Lacrosse</title>
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
    <main>
      <div>
        <Head>
          <title>Keio Men's Lacrosse</title>
        </Head>
        <header className={styles.login_header}>
          <Image className={styles.login_logo_1} src={logo_1} quality={100} alt='logo_1' />
        </header>
        ログイン後です。
        {session.user.email}
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </main>
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