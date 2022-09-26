var express = require('express');    //importes express app 
var app = express();                 //creating instance of an expess app
var products= require("./products")
app.set('view engine', 'pug');
app.set('views','./views');

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