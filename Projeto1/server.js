const express = require ('express');
const mysql = require ('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Server
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s",host,port);

});

var conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'projetobackend'
});

app.get('/product',function(request,response){
    conection.query("SELECT * FROM projetobackend.product", function(err,rows,fields){
        response.send(rows);
    })
});