const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
let objectArray = [];
let total;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})
app.post('/equals', (req, res) => {
    let response1 = req.body
    if(response1.operator === '+'){
        total = Number(response1.input1) + Number(response1.input2);
        console.log(total)
    }
    else if(response1.operator === '-'){
        total = Number(response1.input1) - Number(response1.input2);
        console.log(total)

    }
    else if(response1.operator === '*'){
        total = Number(response1.input1) * Number(response1.input2);
        console.log(total)

    }
    else if(response1.operator === '/'){
        total = Number(response1.input1) / Number(response1.input2);
        console.log(total)
    }
    response1.answer = total
    objectArray.push(response1);
    console.log(response1)
    res.sendStatus(201);
  })
app.get('/answer', (req, res) =>{
    res.send(objectArray);
})