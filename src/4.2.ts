import {readData} from './helpers'
import {BingoCard} from './models/Bingo'


readData('4', (data) => {
    const [numbersData, ...boardsData] = data.split(/\n\n/)
    const numbers = numbersData.split(/,/).map(x => parseInt(x))
    let boards = boardsData.map(x => new BingoCard(x))

    for (let n = 0; n < numbers.length; n++) {
        const number = numbers[n]
        console.debug(`Calling #: ${number}`)

        for (let i = 0; i < boards.length; i++) {
            let board = boards[i]
            board.markNumber(number)
        }

        if (boards.length == 1 && boards[0].isWinning) {
            console.log(`Final Score: ${boards[0].score * number}`)
            return
        }

        boards = boards.filter(b => !b.isWinning)
    }
    throw new Error('Winning Board not found.')
})
