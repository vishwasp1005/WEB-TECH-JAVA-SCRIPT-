const fs = require('fs');

const about = fs.readFileSync('./about.html');
const contect = fs.readFileSync('./contect.html');

console.log(about);
console.log(contect);


const http= require('http');

const server = http.createServer((req,res)=>{
    // res.end("<button onclick='Fac()'> BOOM </button>" + " <script>  function Fac(){  let a = parseInt(prompt('Enter the number'));let sum = 1;for(let i=1 ; i<=a;i++){sum *= i;}alert('your ans is :   ' + sum); } </script>");
    res.setHeader('Content-Type','text/html')
    res.write(about.toString());
    res.end(contect.toString());
})

server.listen(4900,()=>{
    console.log("server started");
})