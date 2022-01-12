type BingoBoard = number[][]
type MarkerBoard = boolean[][]

export class BingoCard {
    board: BingoBoard
    markers: MarkerBoard = []

    constructor(board: BingoBoard) {
        this.board = board
        this.resetMarkers()
    }

    public markNumber(n: number) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (this.board[i][j] == n) {
                    this.markers[i][j] = true
                    return //assumes numbers only show up once
                }
            }
        }
    }

    public isWinning() {
        return this.checkRows || this.checkColumns
    }

    // static createBoard(inputString: string): BingoBoard {
    //     //TODO implement
    // }

    private checkRows() {
        this.markers.forEach(row => {
            if (!row.includes(false)) {
                return true
            }
        })
        return false
    }

    //TODO unit tests for both these checkers

    private checkColumns() {
        for (let i = 0; i < this.markers[0].length; i++) {
            if (!this.markers.some(row => row[i] == false)) {
                return true
            }
        }
        return false
    }

    private resetMarkers() {
        this.markers = []
        let row = []
        for (let i = 0; i < this.board[0].length; i++) {
            // assumes even size rows. if board[i].length ever varries; then nest this.
            row.push(false)
        }
        for (let i = 0; i < this.board.length; i++) {
            this.markers.push([...row])
        }
    }
}
