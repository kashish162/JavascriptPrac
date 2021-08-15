


// person["FirstName"] = "Adam Colson"

// person.firstName = "Adam"
// person.lastName = "Colson"
var person = {
    firstName : 'Adam',
    lastName: 'Colson',
    email: 'adm@ef.com',
    address:{
        state: 'New South Wales',
        city: 'Sydney',
        Country: 'Australia'
    },

    getFullName: function() {

        return this.firstName + ' ' + this.lastName
        
    }


}

console.log(person.firstName)
console.log(person.address.state)
console.log(person.getFullName())