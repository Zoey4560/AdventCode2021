import {readData} from './helpers'

type Values = number[][]

readData('3', (data) => {
    const values: Values = data.split(/\n/).map(x => x.split('').map(y => parseInt(y)))
    values.pop() //drop trailing newline

    const oxygenRating = ratingReducer(values, false)
    const co2Rating = ratingReducer(values, true)

    console.log(`Oxy: ${oxygenRating} Co2: ${co2Rating}`)
    console.log(`Power Usage: ${oxygenRating * co2Rating}`)
})

function countValues(values: Values, i: number) {
    let valueCounts = [0, 0] // for digits abcd.. [[a0, a1], [b0, b1], ..]
    values.forEach(vals => {
        valueCounts[vals[i]] += 1
    })
    return valueCounts
}

function ratingReducer(sourceValues: Values, flip: boolean) {
    let values = [...sourceValues]
    let i = 0
    while (values.length > 1) {
        let c = countValues(values, i)
        let testVal = c[0] > c[1] ? 0 : 1
        if (flip) {
            testVal = 1 - testVal
        }
        values = values.filter(x => x[i] == testVal)
        // console.debug(`Run: ${i} Length: ${values.length}`)
        i++
    }
    return parseInt(values[0].join(''), 2)
}
