import {readData} from './helpers'

readData('3', (data) => {
    const values = data.toString().split(/\n/)
    let valueCounts: number[][] = [] // [[a0, a1], [b0, b1]]

    values.forEach(sval => {
        sval.split('').forEach((char, i) => {
            let val = parseInt(char)
            if (valueCounts[i] == undefined) {
                valueCounts[i] = []
            }
            if (valueCounts[i][val] == undefined) {
                valueCounts[i][val] = 0
            }
            valueCounts[i][val] += 1
        })
    })

    console.log('Value Counts:')
    console.log(valueCounts)

    let gamma = parseInt(valueCounts.map(c => c[0] > c[1] ? 0 : 1).join(''), 2)
    let epsilon = gamma ^ 4095
    console.log(`Gamma: ${gamma} Epsilon: ${epsilon}`)
    console.log(`Power Usage: ${gamma * epsilon}`)
})
