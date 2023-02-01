import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo_1 from '../public/logo_1.png'

export default function Layout({children}) {
    return(
        <div className={styles.login_main}>
            <Head>
                <title>Keio Men's Lacrosse</title>
            </Head>
            <headeer className={styles.login_header}>
                <Image className={styles.login_logo_1} src={logo_1} quality={100} alt='logo_1' />
            </headeer>
            {children}
        </div>
    )
}