import {readFile} from 'fs'

export function readData(s: string, fn: (data:string) => void) {
    readFile('data/' + s + '.txt', (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        fn(data.toString().trim())
    })
}
