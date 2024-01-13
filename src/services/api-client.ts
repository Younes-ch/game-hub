import axios, { AxiosRequestConfig } from "axios"
import { Game } from "../hooks/useGames";

export interface FetchAllResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

export

    const axiosInstance = axios.create({
        baseURL: 'https://api.rawg.io/api',
        params: {
            key: 'a3feb783826d4f9bb0d4295987a364fe'
        },
    })

class APIClient<T> {
    constructor(public endpoint: string) { }


    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchAllResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    };

    get = (id: number | string) => {
        return axiosInstance
            .get<T>(`${this.endpoint}/${id}`)
            .then(res => res.data);
    }
}

export default APIClient;
