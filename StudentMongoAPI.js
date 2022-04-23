const express = require('express')
const app = express()
const router = express.Router()
const mongoose = require("mongoose")
const Student = require("./models/student-mongo")
const cors = require('cors')

app.use(express.json()) 
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/studentdb", (err)=>{
    if(err){
        throw err
    } else {
        console.log(`Connected to mongodb successfully !!!`)
    }
})

router.get("/", (req, res) => {
    res.json('Welcome to Student API using MongoDB')
})

router.get("/students", (req, res) => {
    Student.getStudents(function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.get("/students/:id", (req, res) => {
    const studentId = req.params.id
    Student.getStudentById(studentId, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.post("/students", (req, res) => {
    const student = req.body
    Student.createStudent(student, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/students/:id", (req, res)=>{
    const studentId = req.params.id
    const student = req.body

    Student.updateStudent(studentId, student, (err, data)=>{
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/students/:id", (req, res)=>{
    const studentId = req.params.id
    Student.deleteStudent(studentId, function(err, data){
        if(err){
            throw err
        } 
        res.json(data)
    })
})



app.use("/api", router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`)
})