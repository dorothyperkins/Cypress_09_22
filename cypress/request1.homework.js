const axios = require('axios')

axios.default.put('https://reqres.in/api/users/2')
.then(function(res){
    console.log(res)
})
.catch(function(err) {
    console.error(err)
})
.then (function () {

})