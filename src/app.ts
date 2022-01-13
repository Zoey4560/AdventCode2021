const puzzle = process.argv[2]
if (!puzzle){
    console.log('Advent Code Breaker! Please pick which number puzzle you\'d like solved')
} else {
    try {
        require(`./${parseFloat(puzzle)}`)
    }
    catch {
        console.error('Could not find the puzzle you asked for.')
    }
}
