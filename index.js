const express = require('express')
const expressWs = require('express-ws')
const app = express()
const ws = expressWs(app)

const player = (sock, username, timer) => {
    return { sock, username, timer }
}

const range = (start, end, gen) => {
    let array = [];
    for (let i = start; i < end; i++) {
        array.push(gen())
    }
}

const pixel = () => '#5132fa'

let players = []
let grid = range(0, SIZE, () => range(0, SIZE, pixel))

app.ws('/fopix', (ws, req) => {
    ws.on('message', msg => {
        const message = JSON.parse(msg)
        if (message.tag == 'login') {
            players.push(player(ws, message.username, new Date()))
        } else if (message.tag == 'place') {

        }
    })
})

app.use(express.static('public'))

console.log('Listening on http://localhost:3000')
app.listen(3000)