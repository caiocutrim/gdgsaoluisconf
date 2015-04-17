var sayHello = function(name){
var text = "Hello, " + name;
return function(){
  console.log(text);
  };
};
sayHello("Caio");
var sayAnything = sayHello("Caio");
sayAnything();
sayHello("Caio")();
