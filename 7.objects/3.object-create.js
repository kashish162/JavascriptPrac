// var person1 = new Object()
// var person2 = {}
// var person3 = Object.create(person1)
// var person3 = Object.create({})
var person = Object.create(null)
person["firstName"]="Scott"
person["lastName"]="Deadnik"

var emailProperty = "email"
person[emailProperty] ="Scott@ef.com"


console.log(person)
console.log(person["firstName"])
console.log(person["lastName"])
console.log(person["email"])

person["address"] =  new Object()
person["address"]["state"] = "Masachusetts"
person["address"]["city"] = "Boston"
person["address"]["country"] = "USA"

console.log(person)


// console.log(person1)
// console.log(person2)
// console.log(person3)