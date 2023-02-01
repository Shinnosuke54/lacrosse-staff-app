import axios from "axios"
import { decycle } from "json-cyclic"
const SERVERURL = 'https://lacrosse-production.up.railway.app/';
// const SERVERURL = 'http://127.0.0.1:8000/';

export async function getAllMenusData(){
    const res = await axios.get(`${SERVERURL}api/menus/`)
    const menus = JSON.parse(JSON.stringify(decycle(res)));
    const last = menus.data
    return [last];
}

export async function getAllMenuIds(){
    const res = await fetch(new URL(`${SERVERURL}api/menus/`));
    const menus = await res.json();
    return menus.map((menu) => {
        return {
            params: {
                id: String(menu.id)
            }
        }
    })
}

export async function getMenuData(id){
    const res = await axios.get(`${SERVERURL}api/menus/${id}/`);
    const menus = JSON.parse(JSON.stringify(decycle(res)));
    const last = menus.data
    return [last];
}