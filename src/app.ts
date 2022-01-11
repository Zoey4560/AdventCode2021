/************************************************
  Advent of Code 2021 attempts.
  Focus on improving Typescript & Docker skills

  Local:
    tsc && node build/app.js <# of puzzle to solve>
  Docker:
    docker run --rm -it $(docker build -q .) <# of puzzle to solve>



TODOs:
    docker - set up linked volumes
    docker - fix tsc install -- doesn't register?
    dockerfile - only copy data & src (not node_modules)



************************************************/

const puzzle = process.argv[2]
if (!puzzle){
    console.log('Advent Code Breaker! Please pick which number puzzle you\'d like solved')
} else {
    try {
        require(`./${parseInt(puzzle)}`)
    }
    catch {
        console.error('Could not find the puzzle you asked for.')
    }
}
