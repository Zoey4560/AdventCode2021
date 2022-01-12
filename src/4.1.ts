import {readData} from './helpers'
import {BingoCard} from './models/Bingo'


let b = new BingoCard([[0,0,0],[0,0,0],[0,0,0]])
console.debug(b.board)
console.debug(b.markers)


readData('4', (data) => {

})
