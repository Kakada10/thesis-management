const {
    thesisTable
} = require("../model/thesisDb");
const fs = require("fs");

exports.login = (req,res) => {
    res.send("Admin logined!")
}

exports.logout = (req,res) => {
    const token = ''
    res .cookie("access_token","",{
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
    })
    .json({
        message: "logout successfully 😊 👌",
    });
}


exports.uploadThesis = async (req,res) => {
    const path = "C:/Users/ASUS/Desktop/" + req.body.name
    var file = fs.readFileSync(path);
    const thesis = { 
        student_id: req.body.student_id,
        student_name: req.body.student_name,
        student_email: req.body.student_email,
        department: req.body.department,
        thesis_id: req.body.thesis_id,
        title: req.body.title,
        thesis: {
            data: new Buffer.from(file).toString('base64'),
            contentType:req.body.contentType,
        },
        category: req.body.category,
        status: req.body.status,
        department: req.body.department,
        intern_year: req.body.intern_year,
        uploadAt: req.body.uploadAt,
        download: 0
    }
    thesisTable.insertOne(thesis);
    console.log("New Report Added Successfully!");
    res.send("New Report Added Successfully!")
}


exports.getAllThesis = async (req,res) => {
    thesisTable.find({}).toArray(function(err, data) {
        if (err) throw err
        else res.json(data);})
}

exports.sortThesisByDepartment = async (req,res) => {
    thesisTable.find({department: req.params.department}).toArray(function(err, data) {
        if (err) throw err
        else res.json(data);})
}

exports.sortThesisByCategory = async (req,res) => {
    thesisTable.find({category: req.params.category}).toArray(function(err, data) {
        if (err) throw err
        else res.json(data);})
}

exports.sortThesisByInternYear = async (req,res) => {
    thesisTable.find({intern_year: req.params.intern_year}).toArray(function(err, data) {
        if (err) throw err
        else res.json(data);})
}

exports.sortThesisByStatus = async (req,res) => {
    thesisTable.find({status: req.params.status}).toArray(function(err, data) {
        if (err) throw err
        else res.json(data);})
}

exports.searchThesis = async (req,res) => {
    thesisTable.aggregate([
        {
            $match:{ 
                $or: [
                    {"student_id" : {$regex: new RegExp('.*'+req.params.search+'.*','i')}},
                    {"student_name" : {$regex: new RegExp('.*'+req.params.search+'.*','i')}},
                    {"thesis_id": {$regex: new RegExp('.*'+req.params.search+'.*','i')}},
                    {"title": {$regex: new RegExp('.*'+req.params.search+'.*','i')}},
                    {"category": {$regex: new RegExp('.*'+req.params.search+'.*','i')}},
                    {"department": {$regex: new RegExp('.*'+req.params.search+'.*','i')}},
                    {"intern_year": {$regex: new RegExp('.*'+req.params.search+'.*','i')}}
                ]
            }
        }
    ]).toArray(function(err, data) {
        if (err) throw err
        else res.json(data);
        console.log(req.params.search)
    })
}


exports.deleteThesis = (req,res) => {
    thesisTable.deleteOne({thesis_id: req.params.id})
    console.log("Report Delete Successfully!")
}

exports.updateThesis = (req,res) => {
    const updateThesis = {
        $set: {
            student_id: req.body.student_id,
            student_name: req.body.student_name,
            student_email: req.body.student_email,
            department: req.body.department,
            thesis_id: req.body.thesis_id,
            title: req.body.title,
            category: req.body.category,
            status: req.body.status,
            department: req.body.department,
            intern_year: req.body.intern_year,
            uploadAt: req.body.uploadAt,
            download: req.body.download
        }
    }
    thesisTable.updateOne({ thesis_id: req.params.id}, updateThesis);
    res.send("Update Successfully!")
}