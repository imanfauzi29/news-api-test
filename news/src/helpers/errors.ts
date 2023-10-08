import { AxiosError, isAxiosError } from "axios"

export const handleErrors = (error: Error | AxiosError) => {
    if (isAxiosError(error)) {
        console.log("AXIOS ERROR")
        return;
    }

    console.log(error)
}