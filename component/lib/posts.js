import axios from "axios"
import { decycle } from "json-cyclic"
const SERVERURL = 'https://lacrosse-production.up.railway.app/';
// const SERVERURL = 'http://127.0.0.1:8000/';

export async function getAllPostsData(){
    const res = await axios.get(`${SERVERURL}api/posts/`)
    const posts = JSON.parse(JSON.stringify(decycle(res)));
    const last = posts.data
    return [last];
}

export async function getAllPostIds(){
    const res = await fetch(new URL(`${SERVERURL}api/posts/`));
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id)
            }
        }
    })
}

export async function getPostData(id){
    const res = await axios.get(`${SERVERURL}api/posts/${id}/`);
    const posts = JSON.parse(JSON.stringify(decycle(res)));
    const last = posts.data
    return [last];
}