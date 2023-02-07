import express from 'express'

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send('Hello Wordl')
})

app.listen(port, () => {
    console.log(`Runnion on http://localhost:3000/`)
})