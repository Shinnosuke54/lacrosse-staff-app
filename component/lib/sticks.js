import axios from "axios"
import { decycle } from "json-cyclic"
const SERVERURL = 'https://lacrosse-production.up.railway.app/';
// const SERVERURL = 'http://127.0.0.1:8000/';

export async function getAllSticksData(){
    const res = await axios.get(`${SERVERURL}api/sticks/`)
    const posts = JSON.parse(JSON.stringify(decycle(res)));
    const last = posts.data
    return [last];
}

export async function getAllStickIds(){
    const res = await fetch(new URL(`${SERVERURL}api/sticks/`));
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id)
            }
        }
    })
}

export async function getStickData(id){
    const res = await axios.get(`${SERVERURL}api/sticks/${id}/`);
    const posts = JSON.parse(JSON.stringify(decycle(res)));
    const last = posts.data
    return [last];
}