import {readData} from './helpers'

readData('6', data => {
    let maxDays = 80

    let fish = data.split(/,/).map(x => parseInt(x))
    console.debug(`Initial: ${fish}`)

    for (let day = 0; day < maxDays; day++) {
        let birthCount = fish.filter(f => f == 0).length
        fish = fish.map(f => f == 0 ? 6 : f - 1)
        fish.push(...Array<number>(birthCount).fill(8))
        console.log(`After ${day+1} days: ${fish.length}`)
    }


})
