import {readFile} from 'fs'

readFile('data/1.txt', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const depths = data.toString().split(/\n/).map(x => parseInt(x))

    let increaseCount = 0
    let lastDepth = depths[0] + depths[1] + depths[2]

    for (let i = 1; i < depths.length - 1; i++) {
        let depth = depths[i] + depths[i+1] + depths[i+2]
        if (depth > lastDepth) {
            increaseCount++
        }
        lastDepth = depth
    }

    console.log(`Depth increases ${increaseCount} times`)
})
