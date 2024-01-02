import axios from "axios"

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a3feb783826d4f9bb0d4295987a364fe'
    },
})