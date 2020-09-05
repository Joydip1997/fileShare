const router = require("express").Router();
const { v4: uuid4 } = require("uuid");
const multer = require("multer");
const path = require('path');
const File = require("../Models/file")


let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()} - ${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName)
    }

})

let upload = multer({
    storage: storage,
    limits: { fileSize: (1000000 * 100) }
}).single("myfile");




router.post("/", (req, res) => {
    upload(req, res, async(err) => {
        if (err) {
            return res.status(500).json({ error: "inner" })
        }
        const file = File({
            filename: req.file.filename,
            uuid: uuid4(),
            size: req.file.size,
            path: req.file.path
        })
        const response = await file.save()
        return res.json({ file: `${process.env.APP_BASE_URL}/file/${response.uuid}` })
    })
})


module.exports = router