const express = require('express')
const app = express()
const router = express.Router()
const sql = require('mssql')
const cors = require('cors')

const dbConfig = {
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'studentdb',
    options: {
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
}

sql.connect(dbConfig, (err) => {
    if(err){
        throw err
    } else {
        console.log(`Connected to sql server successfully !!!`)
    }
})


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

router.get("/", function(req, res){
    res.json("Welcome to Student API using SQL ServerDB")
})

router.get("/students", function(req, res) {
    const request = new sql.Request()
    const selectQuery = `SELECT * FROM student`
    request.query(selectQuery, function(err, data){
        if(err){
            throw err
        }
        res.json(data.recordset)
    })
})

router.get("/students/:id", function(req, res){
    const studentId = req.params.id
    const request = new sql.Request()
    const selectQueryById = `SELECT * FROM student WHERE _id=${studentId}`
    request.query(selectQueryById, function(err, data){
        if(err){
            throw err
        }
        res.json(data.recordset)
    })
})

router.post("/students", function(req, res){
    const {name, email, city} = req.body
    const request = new sql.Request()
    const insertQuery = `INSERT INTO student (name, email, city) VALUES ('${name}', '${email}', '${city}')`
    request.query(insertQuery, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.put("/students/:id", function(req, res){
    const studentId = req.params.id
    const {name, email, city} = req.body
    const request = new sql.Request()
    const updateQuery = `UPDATE student SET name= '${name}', email='${email}', city='${city}' WHERE _id=${studentId}`
    request.query(updateQuery, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
})

router.delete("/students/:id", function(req, res){
    const studentId = req.params.id
    const request = new sql.Request()
    const deleteQuery = `DELETE FROM student where _id=${studentId}`
    request.query(deleteQuery, function(err, data){
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