import {readData} from './helpers'

type Line = {x1: number, y1: number, x2: number, y2:number}


type Field = number[][]
function addToField(field: Field, x: number, y:number) {
    //probably bad that this mutates field.. should turn into class? should return new/same field?
    if (field[x] == undefined) {
        field[x] = []
    }
    if (field[x][y] == undefined) {
        field[x][y] = 0
    }
    field[x][y] += 1
}

readData('5', data => {
    let lines: Line[] = []
    data.split(/\n/).forEach(strLine => {
        let [[x1, y1], [x2, y2]] = strLine.split(/ -> /).map(x => x.split(/,/).map(y => parseInt(y)))
        lines.push({x1: x1,y1: y1,x2: x2,y2: y2})
    })

    let field: Field = []
    lines.forEach(line => {
        if (line.y1 == line.y2) {
            //horizontal
            for (let x = Math.min(line.x1, line.x2); x <= Math.max(line.x1, line.x2); x++) {
                addToField(field, x, line.y1)
            }
        } else if (line.x1 == line.x2) {
            //vertical
            for (let y = Math.min(line.y1, line.y2); y <= Math.max(line.y1, line.y2); y++) {
                addToField(field, line.x1, y)
            }
        } else {
            //assumed diagonal
            let directionX = line.x1 > line.x2 ? -1 : 1
            let directionY = line.y1 > line.y2 ? -1 : 1
            for (let i = 0; i <= directionX * (line.x2 - line.x1); i++) {
                addToField(field, line.x1 + (i * directionX), line.y1 + (i * directionY))
            }
        }

    })
    console.log(`Danger Zones: ${field.map(row => row.filter(n => n >= 2).length).reduce((s, c) => s + c)}`)
})
