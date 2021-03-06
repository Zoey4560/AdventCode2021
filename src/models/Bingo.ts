type BingoBoard = number[][]
type MarkerBoard = boolean[][]

export class BingoCard {
    board: BingoBoard = [[]]
    markers: MarkerBoard = [[]]

    constructor(boardString: string) {
        this.parseBoardString(boardString)
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

    public get score() {
        let score = 0
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                if (!this.markers[i][j]) {
                    score += this.board[i][j]
                }
            }
        }
        return score
    }

    public get isWinning() {
        return this.checkRows() || this.checkColumns()
    }

    private checkRows() {
        return this.markers.some(row => !row.includes(false))
    }

    private checkColumns() {
        for (let i = 0; i < this.markers[0].length; i++) {
            if (!this.markers.some(row => row[i] == false)) {
                return true
            }
        }
        return false
    }

    private parseBoardString(input: string) {
        this.board = []
        input.split(/\n/).forEach(srow => {
            let row = srow.trim().split(/ +/).map(s => parseInt(s))
            this.board.push(row)
        })
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
