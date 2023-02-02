const mongoose =  require("mongoose");
const db = mongoose.connection;
const thesisTable = db.collection("thesis");

// const thesisSchema = new mongoose.Schema({
//    thesis_id: {type: String, unique: true},
//    student_id: {type: String, unique: true},
//    student_name: String,
//    student_email: {type: String, unique: true},
//    title: String,
//    category: String,
//    status: String,
//    department: String,
//    intern_Year: String,
//    thesis: {
//         data: Buffer,
//         contentType:String
//    },
//    uploadAt: { type: Date, default: Date.now},
//    download: Integer
// })

// const thesisTable  = new mongoose.model("thesis", thesisSchema)
module.exports = {
   thesisTable
}