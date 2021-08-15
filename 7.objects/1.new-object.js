// {name: value}
// {key: value}

var person = new Object();

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
