export const dateTimes = (date: string) => {
    const dates = new Date(date)

    const options: Intl.DateTimeFormatOptions = { timeStyle: 'short', dateStyle: 'long' }
    return dates.toLocaleString('en-EN', options)
}
