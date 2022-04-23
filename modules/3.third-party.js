const express = require("express")
const app = express()
const users = require("./users.json")

app.get("/", function(req, res){
    res.send("Welcome to Express API")
})

app.get("/user", function(req, res){
    res.json(users)
})

app.get("/employee", function(req, res){
    var data = [
        {id: 1, name: "Scott Desatnick", title: "Boss"},
        {id: 2, name: "Adam Colson", title: "Business Analyst"},
        {id: 3, name: "Tuan Bui", title: "Tech Lead"},
    ]
    //res.json(data)
   // res.send("Hello")
   // res.send(200)
   res.json({id:1})
})

const PORT = 3001

app.listen(PORT, function(){
    console.log(`Server is listening at PORT ${PORT}`)
})
