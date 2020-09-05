const Router = require("express").Router();
const File = require('../Models/file');


Router.get("/:uuid", async(req, res) => {


    try {
        const file = await File.findOne({ uuid: req.params.uuid })

        if (!file) {
            return res.status(500)
        }

        return res.render('download.ejs', { uuid: file.uuid, fileName: file.filename, fileSize: file.size, downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}` });

    } catch (error) {

    }
})



module.exports = Router