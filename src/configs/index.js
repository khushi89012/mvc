const express = require('express')

//importing all controllers here
const userController = require('./controllers/user.controller')
const evalutionController = require('./controllers/evaluation.controller')
const submissionController = require('./controllers/submission.controller')

const connect = require('./configs/db')

const app = express()

//adding middleware from express that allows reading json files
app.use(express.json())

//using controllers here
app.use('/users', userController)
app.use('/evaluations', evalutionController)
app.use('/submissions', submissionController)

app.listen(2000, async function () {
  try {
    await connect()
    console.log('running on port 2000')
  } catch (e) {
    console.log('e:', e.message)
  }
})
