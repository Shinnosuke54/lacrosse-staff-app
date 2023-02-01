import React from "react";
import { useState } from "react";
import styles from "./trs.module.css"
import axios from "axios"
import FormData from "form-data";

const baseURL = "https://lacrosse-production.up.railway.app/api/injuries/"
// const baseURL = "http://127.0.0.1:8000/api/post/"


export default function Form(){
    const [player, setPlayer] = useState()
    const [body, setBody] = useState()
    const [status, setStatus] = useState()

  async function submitHandler(e){
    e.preventDefault();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    try{
        const formData = new FormData();
        formData.append("player", player)
        formData.append("body", body)
        formData.append("status", status)
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
        <input onChange={e => setPlayer(e.target.value)} type="text" placeholder="name" value = {player} required />
      </div>
      
      <div className={styles.form}>
        <textarea onChange={e => setBody(e.target.value)} type="text" rows={5} placeholder="Body" value = {body} required />
      </div>

      <div className={styles.form}>
        <textarea onChange={e => setStatus(e.target.value)} type="text" rows={5} placeholder="Status" value = {status} required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};