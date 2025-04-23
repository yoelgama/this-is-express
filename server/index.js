/* 
GET: REQUEST RESSOURCE
POST: SENDING RESSOURCE
PUT: REPLACE RESSOURCE
PATCH: PATCH UP (SEND A PART OF RESSOURCE) A RESSOURCE
DELETE: DELETE RESSOURCE
*/


import express from 'express'
import { dirname } from "path"
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get('/about', (req, res) => {
    res.send("Do you want to know about me? Really?")
})

app.get('/contact', (req, res) => {
    res.send("So, my number is: 119707070 and, if you can't get it, 70 again.")
})