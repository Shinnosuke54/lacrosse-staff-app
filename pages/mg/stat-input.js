import React from "react";
import { useState } from "react";
import styles from "./mg.module.css"
import axios from "axios"
import FormData from "form-data";

const baseURL = "https://lacrosse-production.up.railway.app/api/shots/"


export default function Form(){
    const [player, setPlayer] = useState()
    const [score, setScore] = useState(0)
    const [gb, setGb] = useState(0)
    const [bd, setBd] = useState(0)
    const [pc, setPc] = useState(0)
    const [shotall, setShotall] = useState(0)
    const [shotin, setShotin] = useState(0)
    const [shotgoal, setShotgoal] = useState(0)

  async function submitHandler(e){
    e.preventDefault();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    try{
        const formData = new FormData();
        formData.append("player", player)
        formData.append("score", score)
        formData.append("gb", gb)
        formData.append("bd", bd)
        formData.append("pc", pc)
        formData.append("shot_all", shotall)
        formData.append("shot_goal", shotgoal)
        formData.append("shot_in", shotin)
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
        <input onChange={e => setPlayer(e.target.value)} type="text" placeholder="Name" value = {player} required />
      </div>
      
      <div className={styles.form}>
        <p>score {score}</p>
        <button onClick={() => setScore(s => s + 1)} type="button">+</button>
        <button onClick={() => setScore(s => s - 1)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>gb {gb}</p>
        <button onClick={() => setGb(s => s + 1)} type="button">+</button>
        <button onClick={() => setGb(s => s - 1)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>bd {bd}</p>
        <button onClick={() => setBd(s => s + 1)} type="button">+</button>
        <button onClick={() => setBd(s => s - 1)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>pc {pc}</p>
        <button onClick={() => setPc(s => s + 1)} type="button">+</button>
        <button onClick={() => setPc(s => s - 1)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>shotall {shotall}</p>
        <button onClick={() => setShotall(s => s + 1)} type="button">+</button>
        <button onClick={() => setShotall(s => s - 1)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>score {score}</p>
        <button onClick={() => setScore(s => s + 1)} type="button">+</button>
        <button onClick={() => setScore(s => s - 1)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>shotin {shotin}</p>
        <button onClick={() => setShotin(s => s + 1)} type="button">+</button>
        <button onClick={() => setShotin(s => s - 1)} type="button">-</button>
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};