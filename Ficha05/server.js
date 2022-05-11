const express = require('express');
const fs = require ('fs');
const app = express();
const port = 2000;


const bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


function readFile(path){
    var fileContent = fs.readFileSync(path, "utf-8");
    return fileContent;
}
function writeFile(path, data){
    fs.writeFileSync(path,data)
}
console.log(readFile('./persons.json'));

//end point
// responde a um pedido HTTP
// 1º argumento e a rota/path do endpoint
// 2º é o codigo que vai ser executado quando
// este endpoint for invocado

app.get('/', function(req, res) {
  res.send('Hello Worldddd!');
})

app.get('/users', function(req, res) {


 res.send(personsObject);
})

app.delete('/users/:id', function(req, res) {
  var id = req.params.id;

  var person = personsObject["person" + id];

  if(person == undefined){
    res.send("This id does not exist");
  }
  else{
    delete personsObject["person" + id];

    writeFile("./persons.json", JSON.stringify(personsObject));
    
    res.send("This id" + " "+ id + " " + "was deleted");
  }
})

app.get('/users/:id', function(req, res) {
  var id = req.params.id;

  var person = personsObject["person" + id];

  if(person == undefined){
    res.send("This id does not exist");
  }
  else{
    res.send(person);
  }
})

app.post('/users', (req, res) => {

// person que vem do body do pedido
  var person = req.body;
// selecionar as chaves de uma array e obter o seu tamanho
  var size = Object.keys(personsObject).length;
  //incrementa 1 valor
  size++;
  //atribuir o id igual ao tamanho
  person.id = size;
  //criar uma nova chave por exemplo: person6 que tera o valor da person que vem no body
  personsObject["person" + person.id] = person;
  //enviar o id da pessoa que foi inserida

  writeFile("./persons.json", JSON.stringify(personsObject));

  res.send(personsObject);
})

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var personfrombody = req.body;
  var person = personsObject["person" + id];

  if(person == undefined){
    res.send("This id does not exist");
  }
  else{
      personfrombody.id = parseint(id);
      personsObject["person" + id] = personfrombody;

      writeFile("./persons.json", JSON.stringify(personsObject));

      res.send(personfrombody);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


var personsString = readFile ('./persons.json');
var personsObject = JSON.parse(personsString);