import express from 'express'

import { addToFile } from './controllers/donationsController.js'

const app = express()

app.use(express.json())

app.route('/api/donations').post(addToFile)

const PORT = 5000
app.listen(PORT, console.log(`server running on ${PORT} port`))
