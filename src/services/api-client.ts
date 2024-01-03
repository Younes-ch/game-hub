import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

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
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    };
}

export default APIClient;
