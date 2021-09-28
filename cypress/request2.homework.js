const axios = require('axios')

axios.default.post('https://reqres.in/api/register', {email:"eve.holt@reqres.in",password:"pistol" })
.then(function(res){
    console.log(res)
})
.catch(function(err) {
    console.error(err)
})
.then (function () {

})