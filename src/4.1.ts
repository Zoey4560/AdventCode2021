import {readData} from './helpers'
import {BingoCard} from './models/Bingo'


readData('4.debug', (data) => {
    const [numbersData, ...boardsData] = data.split(/\n\n/)
    const numbers = [14, 21, 17, 24, 4] //numbersData.split(/,/).map(x => parseInt(x))
    const boards = boardsData.map(x => new BingoCard(x))

    for (let n = 0; n < numbers.length; n++) {
        const number = numbers[n]
        console.debug(`Calling #: ${number}`)



        for (let i = 0; i < boards.length; i++) {
            let board = boards[i]
            //TODO?: confirm this still mutates boards[]
            // due to object reference
            board.markNumber(number)
            if (board.isWinning) {
                console.debug('WINNER')
                console.debug(board)
                //TODO HERE!
                return
            }
        }
        boards.forEach(b => {
            console.debug([b.board, b.markers])
        })
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
