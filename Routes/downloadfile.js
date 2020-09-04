const Router = require("express").Router();
const File = require('../Models/file');


Router.get('/:uuid', async(req, res) => {
    console.log(req.params)

    try {
        const file = await File.findOne({ uuid: req.params.uuid })
        if (!file) {
            return res.json({ "error": "error" })
        }

        return res.status(200).json({
            download: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });






    } catch (error) {
        res.json({ "error": "inner error" })
    }


});



module.exports = Router