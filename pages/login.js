import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import logo_1 from '../public/logo_1.png'
import logo_2 from '../public/logo_2.png'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { useFormik } from 'formik'
import { login_validate } from '../component/lib/validate'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Login() {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
        },
        validate : login_validate,
        onSubmit
    })

    async function onSubmit(values){
        const status = await signIn('credentials',{
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: '/'
        })

        if(status.ok) router.push(status.url)
    }
    return(
        <div>
            <Head>
                <title>Keio Men's Lacrosse</title>
            </Head>
            <header className={styles.login_header}>
                <Image className={styles.login_logo_1} src={logo_1} quality={100} alt='logo_1' />
            </header>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <div>
                    <h1><Image className={styles.login_logo_2} src={logo_2} quality={100} alt='logo_2' /></h1>
                </div>
                <div className={styles.login_form_btm}>
                    <input 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='Email'
                    className={styles.login_form_btm_input}
                    {...formik.getFieldProps('email')}
                     />
                    {formik.errors.email && formik.touched.email ? <div className={styles.error_text}>{formik.errors.email}</div> : <></>}
                    <br />
                </div>
                <div className={styles.login_form_btm}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    id='password' 
                    name='password' 
                    placeholder='Password' 
                    title='パスワードは8文字以上で入力してください。'
                    className={styles.login_form_btm_input}
                    {...formik.getFieldProps('password')}
                    />
                    <span>
                        <AiOutlineEye onClick={() => setShow(!show)} />
                    </span>
                    {formik.errors.password && formik.touched.password ? <div className={styles.error_text}>{formik.errors.password}</div> : <></>}
                </div>
                <button className={styles.login_button} type='submit'>Login</button>
            </form>
            <p className={styles.login_text}>
                Don't have account yet? <Link className={styles.login_link} href='/register'>Sign Up</Link>
            </p>
        </div>
    )
}