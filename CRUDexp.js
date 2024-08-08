const express = require('express');

const app = express();

app.use(express.json());

let arrobj = [
    {
        name:'krish',
        Rno:387,
    }
    ,
    {
        name:'utsav',
        Rno:394,
    }
    ,
    {
        name:'vishwas',
        Rno:388,
    }
]

app.get('/',(req,res)=>{
    res.send(arrobj);
})

app.post('/add',(req,res)=>{
   const a = req.body; 
   arrobj.push(a);
    
    res.send(arrobj);
})

app.put('/put/:index',(req,res)=>{
    
    const index = req.params.index;
   
    const b = req.body; 
   arrobj[index.b];

    res.send(arrobj);
})

app.delete('/delete/:index',()=>{
    const index = req.params.index;

    arrobj.splice(index,1);

    res.send();
})

app.listen(6900,()=>{
    console.log("Server Started . ");
})