//------------------------------- EXERCICIO 2A
var object ={name:"Adrian",age:"20",gender:"Male"};
object=JSON.stringify(object);
//console.log(object)

//-------------------------------EXERCICIO 2B
var string='{"name":"Fernando","age":"16","gender":"Male"}';
string = JSON.parse(string);
//console.log(string);

//----------------------------------------------------------

var emitter = require("./emmiter");
var config = require("./config");

var z = config.types.GREET;

var emtr = new emitter();

emtr.on(config.types.LOG, function(){
    console.log("this is a log listener")
});

emtr.on(config.types.TEST, function(){
    console.log("this is another log listener")
});

emtr.on(config.types.GREET, function(){
    console.log("this is a test listener")
});

emtr.emit(config.types.LOG);
emtr.emit(config.types.TEST);