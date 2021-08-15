// Immediately invoked Function



(function(message){
    
    console.log(message)

})('Welcome to IIFS');

var getMessage = (function(message){
    
    return message

})('Welcome to IIFS');

console.log(getMessage);


// Statements
// (var foo =10 > 9)
// (var foo ="foo" , bar="bar")

// Expression
(10>9)
(console.log('hi'))



