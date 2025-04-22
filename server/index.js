/* 
GET: REQUEST RESSOURCE
POST: SENDING RESSOURCE
PUT: REPLACE RESSOURCE
PATCH: PATCH UP (SEND A PART OF RESSOURCE) A RESSOURCE
DELETE: DELETE RESSOURCE
*/


import express from 'express'
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})

app.get('/', (req, res) => {
    res.send(req.rawHeaders.toString())
})