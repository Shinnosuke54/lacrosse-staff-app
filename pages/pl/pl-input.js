import React from "react";
import { useState } from "react";
import styles from "./pl.module.css"
import axios from "axios"
import FormData from "form-data";

const baseURL = "https://lacrosse-production.up.railway.app/api/players/"
// const baseURL = "http://127.0.0.1:8000/api/post/"


export default function Form(){
    const [name, setName] = useState()
    const [grade, setGrade] = useState()

  async function submitHandler(e){
    e.preventDefault();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    try{
        const formData = new FormData();
        formData.append("name", name)
        formData.append("grade", grade)
        formData.append("date", date)
        for (let value of formData.entries()) { 
            console.log(value); 
        }

        formData.append("csrfmiddlewaretoken", "{{csrf_token}}")
        await axios.post(baseURL, formData, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
    }
    catch (error) {
        console.error(error)
    }
}


  return (
    <form onSubmit={submitHandler}>
      <div className={styles.form}>
        {/* <input type="text" placeholder="Title" value = "title" required /> */}
        <input onChange={e => setName(e.target.value)} type="text" placeholder="Title" value = {name} required />
      </div>
      <div className={styles.form}>
        <textarea onChange={e => setGrade(e.target.value)} type="text" rows={5} placeholder="Content" value = {grade} required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};