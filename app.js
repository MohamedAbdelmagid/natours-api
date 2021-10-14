const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(404).json({ msg: 'Hello expressJS :)' })
})


app.listen(3000, () => {
  console.log('listening to port 3000...')
})