// program to check prime numbers
// function prime_or_not(x){
//     let f = true;
//     for(let i= 2; i<x ; i++){
//         if(x%2==0){
//             f = false;
//         }
//     }
//     return f;
// }

// console.log(prime_or_not(3));

// module.exports.prime_or_not = prime_or_not;

const fs = require('fs');

const data1 = fs.readFileSync('./contect.html');
const data2 = fs.readFileSync('./about.html');


const http= require('http');
// const url = require('url');

const server = http.createServer((req,res)=>{ 
    if(req.url == "/home"){
        res.setHeader('Content-Type','text/html')
        res.end(data1.toString());
    }
    else if(req.url == "/about"){
        res.end("My name is Vishwas Patel")
        
    }
    else if(req.url == "/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data2.toString());
        
    }

    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
                res.end('Plz send us some req. ');
    }
   
})

server.listen(5000,()=>{
    console.log("server started");
})



