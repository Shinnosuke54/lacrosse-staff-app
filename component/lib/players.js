import axios from "axios"
import { decycle } from "json-cyclic"
const SERVERURL = 'https://lacrosse-production.up.railway.app/';
// const SERVERURL = 'http://127.0.0.1:8000/';

export async function getAllPlayersData(){
    const res = await axios.get(`${SERVERURL}api/players/`)
    const players = JSON.parse(JSON.stringify(decycle(res)));
    const last = players.data
    return [last];
}

export async function getAllPlayerIds(){
    const res = await fetch(new URL(`${SERVERURL}api/players/`));
    const players = await res.json();
    return players.map((player) => {
        return {
            params: {
                id: String(player.id)
            }
        }
    })
}

export async function getPlayerData(id){
    const res = await axios.get(`${SERVERURL}api/players/${id}/`);
    const players = JSON.parse(JSON.stringify(decycle(res)));
    const last = players.data
    return [last];
}