const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 8080

const config = {
  host: 'pfa-desafio2-db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)
  connection.query("SELECT * FROM modules", (err, result, fields) => {
    const resultList = result
      .map(r => `<h2>${r.id} - ${r.name}</h2>`)
      .reduce((acc, val) => acc += val, "")
    res.send(resultList)
  }).on('error', err => {
    res.send('<h2>Error</h2>')
  });

  connection.end();
})

app.listen(port, () => {
  console.log("Running! Port: " + port)
})