function getName(){
    // console.log('Hello')
    return "returning value"
    // return
}

var userName = getName()
console.log(userName)

// console.log('Hey')
// console.warn('Hey pleasse check this')
// console.info('Hey provid more info ')
// console.error('there is an error')

function getFullName(firstname,lastname){

    return firstname + ' '+lastname

}

var fullName1 = getFullName()
console.log(fullName1, typeof fullName1)

var fullName2 = getFullName('Adam')
console.log(fullName2, typeof fullName2)

var fullName3 = getFullName('Adam','Colson')
console.log(fullName3, typeof fullName3)





// var a = 1 + 2 +  "uma" + 3 + 4
// console.log(a,typeof a)

// var value = undefined + "Hello"
// console.log(value,typeof value)

// var output = null + " Hey"
// console.log(output, typeof output)