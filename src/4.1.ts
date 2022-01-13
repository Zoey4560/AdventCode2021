import {readData} from './helpers'
import {BingoCard} from './models/Bingo'


readData('4', (data) => {
    const [numbersData, ...boardsData] = data.split(/\n\n/)
    const numbers = numbersData.split(/,/).map(x => parseInt(x))
    const boards = boardsData.map(x => new BingoCard(x))

    for (let n = 0; n < numbers.length; n++) {
        const number = numbers[n]
        console.debug(`Calling #: ${number}`)
        for (let i = 0; i < boards.length; i++) {
            let board = boards[i]
            board.markNumber(number)
            if (board.isWinning) {
                console.debug('WINNER')
                console.debug(board)
                console.log(`Final Score: ${board.score * number}`)
                return
            }
        }
    }

    numbers.forEach(number => {
        console.debug(`Calling #: ${number}`)
        boards.forEach(board => {
            board.markNumber(number)
            if (board.isWinning) {
                console.debug(board)

            }
        })
    })
})
