const mongoose = require("mongoose")
const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true
    },
    city: {
        type: String,
        required : true
    },
}, {versionKey: false})

// const Student = mongoose.model("student", studentSchema, "student")
// module.exports = mongoose.model("student", studentSchema, "student")

const Student = module.exports = mongoose.model("student", studentSchema, "student")

module.exports.getStudents = function(callback){
    Student.find(callback)
}

module.exports.getStudentById = function(studentId, callback){
    Student.find({_id: studentId}, callback)
}

module.exports.createStudent = function(student, callback){
    Student.create(student, callback)
}

module.exports.updateStudent = function(studentId, student, callback){
    Student.updateOne({_id: studentId}, student, callback)
}

module.exports.deleteStudent = function(studentId, callback){
    Student.deleteOne({_id: studentId}, callback)
}