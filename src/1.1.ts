import {readFile} from 'fs'

readFile('data/1.txt', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    const depths = data.toString().split(/\n/).map(x => parseInt(x))

    let increaseCount = 0
    let lastDepth = depths.shift() || 0

    depths.forEach(depth => {
        if (depth > lastDepth) {
            increaseCount++
        }
        lastDepth = depth
    })
    console.log(`Depth increases ${increaseCount} times`)
})
