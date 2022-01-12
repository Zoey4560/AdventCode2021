import {readData} from './helpers'

readData('2', (data) => {
    const instructions = data.split(/\n/)

    let location = 0
    let depth = 0

    instructions.forEach(instruction => {
        let [ins, sval] = instruction.split(/ /)
        let val = parseInt(sval)
        switch (ins) {
            case 'forward':
                location += val
                break
            case 'up':
                val *= -1
            case 'down':
                depth += val
                break
            default:
                console.error(`instruction not recognized!! '${instruction}'`)
        }
    })

    console.log(`Location: ${location} Depth: ${depth}`)
    console.log(`Signature: ${location * depth}`)
})
