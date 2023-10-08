import axios from "axios";

const baseURL = 'https://newsapi.org/v2'

export const AxiosConfig = axios.create({
    baseURL,
    params: {
        apiKey: import.meta.env.API_KEY || '40d72b30fcd842e38d116d5d5ae8481d'
    }
})