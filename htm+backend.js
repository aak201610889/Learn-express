const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})
app.post('/', (req, res) => {
  let var1 =Number( req.body.num1);
  let var2 = Number(req.body.num2);
  result = var1 * var2;
  res.send(req.body.email + " " + req.body.password+result);

})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})
app.post('/contact', (req, res) => {

  res.send(req.body.result)

})


app.listen(4000, () => { console.log('u work on server 4000');})