const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const mongoDB=require("./db")
mongoDB();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use('/api',require("./Routes/Createuser"))
app.use('/api',require("./Routes/Displaydata"))
app.use('/api',require("./Routes/OrderData"))
app.use(bodyParser.json());
app.post('/', (req, res) => {
 res.send("hello")
  
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})