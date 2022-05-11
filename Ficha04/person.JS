function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greet = function(){
    console.log("Hello " + this.firstName + " " + this.lastName + ", Age: " + this.age);
}

Person.prototype.age=null;

var joao = new Person("Joao", "Andrade");
joao.age=30;
joao.greet();

var javier = new Person("Javier", "Rodrigues");
javier.age=10;
javier.greet();

console.log(joao.__proto__);
console.log(javier.__proto__);
console.log(joao.__proto__==javier.__proto__);