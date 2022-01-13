const assert = require('assert');
const Bingo = require('../build/models/Bingo')

//todo could do a lot more fine grained testing
// added to seek down a bug
// could do more direct/mocking; unit

describe('Bingo', () => {
    describe('#checkRows', () => {
        it('should return true on winning board', () => {
            let s = "0 1 2\n3 4 5\n6 7 8"
            let board = new Bingo.BingoCard(s)

            board.markNumber(0)
            assert.ok(!board.isWinning)

            board.markNumber(1)
            assert.ok(!board.isWinning)

            board.markNumber(2)
            assert.ok(board.isWinning)
        })
    })

    describe('#checkColumns', () => {
        it('should return true on winning board', () => {
            let s = "0 1 2\n3 4 5\n6 7 8"
            let board = new Bingo.BingoCard(s)

            board.markNumber(0)
            assert.ok(!board.isWinning)

            board.markNumber(3)
            assert.ok(!board.isWinning)

            board.markNumber(6)
            assert.ok(board.isWinning)
        })
    })
})
