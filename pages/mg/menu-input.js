import React from "react";
import { useState } from "react";
import styles from "./mg.module.css"
import axios from "axios"
import FormData from "form-data";

const baseURL = "https://lacrosse-production.up.railway.app/api/menus/"


export default function Form(){
    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [content, setContent] = useState()

  async function submitHandler(e){
    e.preventDefault();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    try{
        const formData = new FormData();
        formData.append("title", title)
        formData.append("image", image)
        formData.append("content", content)
        formData.append("date", date)
        for (let value of formData.entries()) { 
            console.log(value); 
        }

        // formData.append("csrfmiddlewaretoken", "{{csrf_token}}")
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
        <input onChange={e => setTitle(e.target.value)} type="text" placeholder="メニューの名前" value = {title} required />
      </div>
      <div className={styles.form}>
        <input multiple onChange={(e) => setImage(e.target.files[0])} type="file" required />
      </div>
      <div className={styles.form}>
        <textarea onChange={e => setContent(e.target.value)} type="text" rows={5} placeholder="内容" value = {content} required />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};