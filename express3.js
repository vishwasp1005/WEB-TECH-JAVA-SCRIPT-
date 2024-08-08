const express = require('express');
const fs = require('fs');

const data = fs.readFileSync('./try1.html');
const data3 = fs.readFileSync('./try4.html');
const data2 = fs.readFileSync('./try5.html');

const app = express();

app.all('/home',(req,res)=>{
    res.send('Hello Home!');
})

app.all('/about',(req,res)=>{
    res.send('Hello about!');
})

app.all('/contact',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send(data3);
})

app.all('/try1',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
})

app.all('/try4',(req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.send(data2);
})

app.all('/',(req,res)=>{
    res.send('Hello World!');
})

app.listen(6900);
