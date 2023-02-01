import React from "react";
import { useState } from "react";
import styles from "./mg.module.css";
import axios from "axios";
import FormData from "form-data";

const baseURL = "https://lacrosse-production.up.railway.app/api/sticks/";

export default function Form() {
  const [player, setPlayer] = useState();
  const [depth, setDepth] = useState(null);
  const [string, setString] = useState(null);
  const [end, setEnd] = useState(null);
  const [ball, setBall] = useState(null);
  const [length, setLength] = useState(0);
  const [narrow, setNarrow] = useState(0);
  const [height, setHeight] = useState(0);

  async function submitHandler(e) {
    e.preventDefault();
    // var today = new Date();
    // var date =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getDate();
    try {
      const formData = new FormData();
      formData.append("player", player);
      formData.append("depth", depth);
      formData.append("string", string);
      formData.append("end", end);
      formData.append("ball", ball);
      formData.append("length", length);
      formData.append("narrow", narrow);
      formData.append("height", height);
    //   formData.append("date", date);
      for (let value of formData.entries()) {
        console.log(value);
      }

      formData.append("csrfmiddlewaretoken", "{{csrf_token}}")
      await axios.post(baseURL, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.form}>
        <input
          onChange={(e) => setPlayer(e.target.value)}
          type="text"
          placeholder="Name"
          value={player}
          required
        />
      </div>

      <div className={styles.form}>
        <p>深さ</p>
        <select value={depth} onChange={(e) => {setDepth(e.target.value);}}>
            <option value={null}>---</option>
            <option value="0">アウト</option>
            <option value="1">ぴったり</option>
        </select>
      </div>
      <div className={styles.form}>
        <p>ひも</p>
        <select value={string} onChange={(e) => {setString(e.target.value);}}>
            <option value={null}>---</option>
            <option value="0">アウト</option>
        </select>
      </div>
      <div className={styles.form}>
        <p>エンド</p>
        <select value={end} onChange={(e) => {setEnd(e.target.value);}}>
            <option value={null}>---</option>
            <option value="0">アウト</option>
        </select>
      </div>
      <div className={styles.form}>
        <p>ボール</p>
        <select value={ball} onChange={(e) => {setBall(e.target.value);}}>
            <option value={null}>---</option>
            <option value="0">落ちない</option>
            <option value="1">落ちづらい</option>
        </select>
      </div>
      
      <div className={styles.form}>
        <p>長さ {length}</p>
        <button onClick={() => setLength((s) => s + 0.5)} type="button">+</button>
        <button onClick={() => setLength((s) => s - 0.5)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>横幅 {narrow}</p>
        <button onClick={() => setNarrow((s) => s + 0.5)} type="button">+</button>
        <button onClick={() => setNarrow((s) => s - 0.5)} type="button">-</button>
      </div>
      <div className={styles.form}>
        <p>縦幅 {height}</p>
        <button onClick={() => setHeight((s) => s + 0.5)} type="button">+</button>
        <button onClick={() => setHeight((s) => s - 0.5)} type="button">-</button>
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
}
