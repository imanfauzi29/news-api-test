export type Params = {
    /** Multidomain, add coma (,) to multidomain */
    domains: string
    q: string
    /** format date YYYY-MM-DD */
    from: string
    /** format date YYYY-MM-DD */
    to: string
    sortBy: string
    country: string
    sources: string
    category: string
    pageSize?: number
    page?: number
}
