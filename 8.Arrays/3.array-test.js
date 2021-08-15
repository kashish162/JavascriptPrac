var data = [
    1,
    "Uma",
    true,
    undefined,
    null,
    function(name) {
        return name
    },
    {name: 'Mahesh'},
    ["Red","BLue","Yellow"]
    

]

var sample = data[5]
var name = data[6].name
console.log(sample(name))

console.log(data[5](data[6].name))


console.log(data[6].name + ' Likes '+ data[7][1])