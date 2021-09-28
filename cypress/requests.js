const axios = require('axios')
// // axios.default.baseURL = 'https://reqres.in/'


// axios.default.get('https://reqres.in/api/users/2')
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err) {
//     console.error(err)
// })
// .then (function () {

// })

let userID = undefined;
axios.default.delete('https://reqres.in/api/users/113')
.then(function (res){
    console.log (res.status)
    console.log (res.data)
})
.catch(function(err) {
    console.error(err)
})
.then (function () {

})