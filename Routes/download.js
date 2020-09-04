const Router = require("express").Router();
const File = require('../Models/file');

Router.get("/:uuid", async(req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if (!file) {
            return res.json({ "error": "error" });
        }

        const filePath = `${__dirname}/../${file.path}`
        console.log(filePath)

        res.download(filePath)

    } catch (error) {

    }
})


module.exports = Router;