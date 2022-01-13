import {readData} from './helpers'

readData('6', data => {
    //Compared to 6.1, this deeals with counts of fishes instead of inividual fish
    //
    // This could likely be solved algebreicly with enough effort.

    let maxDays = 256
    let fish = Array<number>(9).fill(0) // count of fish @ each age i

    data.split(/,/).forEach(f => {
        fish[parseInt(f)] += 1
    })
    console.debug(fish)

    for (let day = 0; day < maxDays; day++) {
        let birthCount = fish.shift() || 0
        fish[6] += birthCount
        fish.push(birthCount)

        console.log(`After ${day+1} days: (${fish.reduce((a,b)=>a+b)}) ${fish}`)
    }
})
