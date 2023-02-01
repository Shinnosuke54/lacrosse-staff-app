import styles from '../styles/Home.module.css'
import logo_1 from '../public/logo_1.png'
import logo_2 from '../public/logo_2.png'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { useFormik } from 'formik'
import { register_validate } from '../component/lib/validate'
import { useRouter } from 'next/router'

export default function Register() {
    const [show, setShow] = useState({password:false, cpassword:false})
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username:'',
            email:'',
            password:'',
            cpassword:''
        },
        validate : register_validate,
        onSubmit
    })

    async function onSubmit(values){
        const options = {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }

        await fetch('https://lacrosse-staff-app.vercel.app/api/auth/signup', options).then(res => res.json()).then((data) => {
            if(data) router.push('https://lacrosse-staff-app.vercel.app/')
        })

    }

    return(
        <div className={styles.login_main}>
            <Head>
                <title>Keio Men&apos;s Lacrosse Register</title>
            </Head>
            <header className={styles.login_header}>
                <Image className={styles.login_logo_1} src={logo_1} objectFit='contain' quality={100} alt='logo_1'/>
            </header>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <div>
                    <h1><Image className={styles.login_logo_2} src={logo_2} quality={100} alt='logo_2' /></h1>
                </div>
                <div className={styles.login_form_btm}>
                    <input 
                    type='text' 
                    id='username' 
                    placeholder='FullName' 
                    className={styles.login_form_btm_input}
                    {...formik.getFieldProps('username')}
                    />
                    {formik.errors.username && formik.touched.username ? <div className={styles.error_text}>{formik.errors.username}</div> : <></>}
                </div>
                <div className={styles.login_form_btm}>
                    <input 
                    type='email' 
                    id='email' 
                    placeholder='Email' 
                    className={styles.login_form_btm_input}
                    {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? <div className={styles.error_text}>{formik.errors.email}</div> : <></>}
                </div>
                <div className={styles.login_form_btm}>
                    <input 
                    type={`${show.password ? "text" : "password"}`} 
                    id='password' 
                    placeholder='Password' 
                    pattern='[a-zA-Z0-9]{8,}' 
                    title='パスワードは8文字以上で入力してください。'
                    className={styles.login_form_btm_input}
                    {...formik.getFieldProps('password')}
                    />
                    <span>
                        <AiOutlineEye onClick={() => setShow({...show, password:!show.password})} />
                    </span>
                    {formik.errors.password && formik.touched.password ? <div className={styles.error_text}>{formik.errors.password}</div> : <></>}
                </div>
                <div className={styles.login_form_btm}>
                    <input 
                    type={`${show.cpassword ? "text" : "password"}`} 
                    id='cpassword' 
                    placeholder='Confirm Password' 
                    pattern='[a-zA-Z0-9]{8,}' 
                    title='入力したパスワードをもう一度入力してください。'
                    className={styles.login_form_btm_input}
                    {...formik.getFieldProps('cpassword')}
                    />
                    <span>
                        <AiOutlineEye onClick={() => setShow({...show, cpassword:!show.cpassword})} />
                    </span>
                    {formik.errors.cpassword && formik.touched.cpassword ? <div className={styles.error_text}>{formik.errors.cpassword}</div> : <></>}
                </div>
                <button className={styles.login_button} type='submit'>SUBMIT</button><br/>
                <p className={styles.login_text}>
                    Have an account? <Link className={styles.login_link} href='/login'>Sign in</Link>
                </p>
            </form>
        </div>
    )
}