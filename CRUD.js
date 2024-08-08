const express = require('express');
const app = express();

app.use(express.json());

let list = ['one','two','three'];

app.get('/list', (req, res)=> {
    res.send(list);
})


app.post('/list', (req, res)=> {
    
    const {name} = req.body;
    list.push(name);
    res.send(list);
})


app.put('/list/:index', (req, res)=> {
    const {name} = req.body;
    list[req.params.index] = name;
    res.send(list);
})


app.delete('/list/:index', (req, res)=> {
    list.splice(req.params.index, 1);
    res.send(list);
})

app.listen(3000, (req, res)=> {
    console.log('Server running');
})