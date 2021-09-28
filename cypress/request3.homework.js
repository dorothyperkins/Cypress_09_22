const axios = require('axios')

axios.default.post('https://reqres.in/api/register', {email: "sydney@fife" })
.then(function(res){
    console.log(res)
})
.catch(function(err) {
    console.error(err)
})
.then (function () {

})

// it`s expect behaviore ( Negative test)