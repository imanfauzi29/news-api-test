type ResponseType = {
    status: string
}

export type SuccessResponseType<T> = ResponseType & {
    totalResults: number
    articles: T[]
}

export type FailedResponseType = ResponseType & {
    code: string
    message: string
}