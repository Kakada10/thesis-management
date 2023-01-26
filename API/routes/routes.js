const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require("multer");
const admin  = require("../controllers/adminControllers")
const authentication = require('../middlewares/authentication')

// const {
//         thesisTable
// } = require("../model/thesisDb");
// router.use(thesisTable);

router.use(cookieParser());
router.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}));
// const Storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null, "thesis/")
//     },
//     filename: (req,file,cb)=>{
//         console.log("this is",file)
//         cb(null,Date.now()+"_"+file.originalname)
//     }
// })
// const upload = multer({storage: Storage})
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/',authentication.isValidation,authentication.isCredential,admin.login);
router.post('/admin/uploadThesis',admin.uploadThesis);
router.put('/admin/updateThesis/:id',authentication.isToken,admin.updateThesis);
router.get('/admin/searchThesis/:search',authentication.isToken,admin.searchThesis);
router.get('/admin/getAllThesis',admin.getAllThesis);
router.get('/admin/sortThesisByDepartment/:department',authentication.isToken,admin.sortThesisByDepartment);
router.get('/admin/sortThesisByCategory/:category',authentication.isToken,admin.sortThesisByCategory);
router.get('/admin/sortThesisByInternYear/:intern_year',authentication.isToken,admin.sortThesisByInternYear);
router.get('/admin/sortThesisByStatus/:status',authentication.isToken,admin.sortThesisByStatus);
router.delete('/admin/deleteThesis/:id',authentication.isToken,admin.deleteThesis);
router.get('/logout',admin.logout);

module.exports = router;
