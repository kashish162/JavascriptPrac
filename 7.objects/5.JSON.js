var obj = { name : 'uma', city: 'hyderabad'}

var JsonObject = {"id": 1, "name" : "uma",
 "city" : "hyderabad"}

console.log(JsonObject)

var person = {"id": 1, "name" : "uma",
"city" : "hyderabad"}

var jsonStringify = JSON.stringify(person)
console.log(jsonStringify,typeof jsonStringify)

var jsonParser = JSON.parse(jsonStringify)
console.log(jsonParser,typeof jsonParser)