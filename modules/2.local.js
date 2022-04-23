let log = {
    info: function(info){
        console.log(`info : ${info}`)
    },
    warning: function(warning){
        console.log(`warning : ${warning}`)
    },
    error: function(error){
        console.log(`error : ${error}`)
    },
}

 module.exports = log
// module.exports = "Hello"
// module.exports = 1
// module.exports = {}
// module.exports = []
// module.exports = function(){}
console.log(module.exports)
module.exports.display = function(){
   console.log("here is your display method") 
}
console.log(module.exports)


