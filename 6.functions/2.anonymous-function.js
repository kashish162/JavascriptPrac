var sayHello=function(){
    return "Hello Buddies"
}

var message = sayHello()
console.log(message)

// console.log(sayHello)


var sayhello = function(){
    return "this is anonymous func"
}

var sendWishes = function(){
    return "Best wishes to all"
}

var message = sendWishes()
console.log(message)


var getFullName = function(firstName,lastName){
    return firstName + ' ' +lastName
}

var fullName = getFullName('Rohit','Batra')
console.log(fullName)

var obj ={
    firstName: 'uma',
    lastName: 'mahesj',
    getFullName: function(){
        this.firstName + ' ' + this.lastName
    }
}