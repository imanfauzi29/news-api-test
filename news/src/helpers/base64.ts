import { Buffer } from "buffer"

export const base64 = (text: string) => {
    return {
        decode: () => decodeFn(text),
        encode: () => encodeFn(text)
    }
}

const encodeFn = (text: string) => Buffer.from(text, 'utf8').toString('base64')
const decodeFn = (text: string) => Buffer.from(text, 'base64').toString('utf8')