import { handleErrors } from "..";
import { Params, SuccessResponseType, TNews } from "../../types";
import { AxiosConfig } from "./AxiosConfig";

export const getEverythingNews = (params?: Partial<Params>): Promise<SuccessResponseType<TNews>> =>
    AxiosConfig.get('/everything', { params }).then(res => res.data)
        .catch(handleErrors)

export const getTopHeadlines = (params?: Partial<Params>): Promise<SuccessResponseType<TNews>> =>
    AxiosConfig.get('/top-headlines', { params }).then(res => res.data)
        .catch(handleErrors)
