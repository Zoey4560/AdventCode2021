import {readData} from './helpers'

type Line = {x1: number, y1: number, x2: number, y2:number}

readData('5', data => {
    let lines: Line[] = []
    data.split(/\n/).forEach(strLine => {
        let [[x1, y1], [x2, y2]] = strLine.split(/ -> /).map(x => x.split(/,/).map(y => parseInt(y)))
        lines.push({x1: x1,y1: y1,x2: x2,y2: y2})
    })

    let field: number[][] = []
    lines.filter(l => l.x1 == l.x2 || l.y1 == l.y2).forEach(line => {
        for (let x = Math.min(line.x1, line.x2); x <= Math.max(line.x1, line.x2); x++) {
            for (let y = Math.min(line.y1, line.y2); y <= Math.max(line.y1, line.y2); y++) {
                // Nested not ideal... wasteful for non-hori/vert lines.
                // only works cuz one of these just runs once (min == max)
                if (field[x] == undefined) {
                    field[x] = []
                }
                if (field[x][y] == undefined) {
                    field[x][y] = 0
                }
                field[x][y] += 1
            }
        }
    })
    console.log(`Danger Zones: ${field.map(row => row.filter(n => n >= 2).length).reduce((s, c) => s + c)}`)
})
