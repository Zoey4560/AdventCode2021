import {readData} from './helpers'

readData('1', (data) => {
    const depths = data.split(/\n/).map(x => parseInt(x))

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
