import express from 'express'
import connectDb from './config/db.js'
const app = express()
connectDb()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000

app.listen(PORT, (error, res) => {
  console.log(`list on port ${PORT}`)
})
