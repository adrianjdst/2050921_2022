const express = require('express');
//const mysql = require ('mysql');
const mysql = require ('mysql2');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Server 
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});

//SQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ficha07'
});

//listo
app.get('/persons',function(request,response){
    conection.query("SELECT * FROM persons", function(err,rows,fields){
        response.send(rows);
    })
});

//listo
app.get('/persons/:id',function(request,response){
    var id = request.params.id;
    conection.query("SELECT * FROM persons where id = ?",[id], function(err,rows,fields){
        response.send(rows);
    })
});

//listo
app.post('/persons', (request, response) => {
    var person = request.body;
    conection.query("INSERT persons SET ?", [person], function(err,rows,fields){
        response.send("Person inserted with id: "+ rows.insertId);
    });
});

app.delete('/persons/:id', (request, response) => {
    var sql = "DELETE FROM persons WHERE id = ?";
    var id = request.body.id;
    connection.query(sql, id, function(error,results,fields){
        if (error) throw error;
        response.send("Affected rows: "+ results.affectedRows);
    });
});