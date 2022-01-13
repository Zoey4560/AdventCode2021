/************************************************
  Advent of Code 2021 attempts.
  Focus on improving Typescript & Docker skills

  Local:
    tsc && npm start <# of puzzle to solve>
  Docker:
    docker run --rm -it $(docker build -q .) <# of puzzle to solve>



TODOs:
    docker - set up linked volumes
    docker - fix tsc install -- doesn't register?

************************************************/

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
