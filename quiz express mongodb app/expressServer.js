var express = require('express');    //importes express app 
var app = express();                 //creating instance of an expess app
var products= require("./products")
app.set('view engine', 'pug');
app.set('views','./views');
var fs= require('fs')
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017'

app.get("/addQuiz",(req,res)=>{
    res.sendFile(__dirname+"/addQuiz.html")
})
app.post("/addQuiz",function(req,res){
    console.log(req.body)
    MongoClient.connect(url,function(err,con){
        if(err)console.log(err)
        else{
            var db = con.db('khut');
            db.collection('quizes').insertOne(req.body)
            .then((data)=>{res.send("Quiz inserted success")})
            .catch(err=>console.log(err))
        }
    })
})
// app.post("/addQuiz",(req,res)=>{
//      console.log(req.body)
//     MongoClient.connect(url,(err,con)=>{
//         if(err)console.log(err)
//         else{
//             var db = con.db('khut');
//             db.collection('quizes').insertOne(req.body)
//             .then((data)=>{res.send("Quiz inserted Successfully")})
//             .catch(err=>console.log(err))
//         }
//     })
// })

app.get("/",(req,res)=>{                             //functions are needed for sending responses, 
                                                        //those funcs are available in express itself
    res.sendFile(__dirname+"/mypage.html")             //will read and send only the data to server.                           

})  
app.get('/products', (req, res) => {
    //console.log(products)
    res.render('productsHome',{pds:products})//sending products as pds to productsHome
 // res.send('GET request to the products')
})  
app.get("/productDetails/:id", (req, res) => {
    var id=req.params.id;
    var selectedProduct =  products.find((p)=>{
        if(p.id==id){
            return true;
        }
    })

   // console.log(selectedProduct)
   // res.send(selectedProduct) 
    res.render('productDetails',{product:selectedProduct})                
})                                                   //creating routes for serving the responses.this route is for root


app.listen(5000)