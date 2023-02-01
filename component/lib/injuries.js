import axios from "axios"
import { decycle } from "json-cyclic"
const SERVERURL = 'https://lacrosse-production.up.railway.app/';
// const SERVERURL = 'http://127.0.0.1:8000/';

export async function getAllInjuriesData(){
    const res = await axios.get(`${SERVERURL}api/injuries/`)
    const injuries = JSON.parse(JSON.stringify(decycle(res)));
    const last = injuries.data
    return [last];
}

export async function getAllInjuryIds(){
    const res = await fetch(new URL(`${SERVERURL}api/injuries/`));
    const injuries = await res.json();
    return injuries.map((injury) => {
        return {
            params: {
                id: String(injury.id)
            }
        }
    })
}

export async function getInjuryData(id){
    const res = await axios.get(`${SERVERURL}api/injuries/${id}/`);
    const injuries = JSON.parse(JSON.stringify(decycle(res)));
    const last = injuries.data
    return [last];
}