import {readFile} from 'fs'
import {BingoCard} from './models/Bingo'


let b = new BingoCard([[0,0,0],[0,0,0],[0,0,0]])
console.debug(b.board)
console.debug(b.markers)


readFile('data/4.txt', (err, data) => {

})
