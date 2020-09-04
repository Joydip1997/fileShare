const express = require('express')
const app = express()
const test = require("./Models/test")

const PORT = process.env.PORT || 3000



const db = require('./config/db');
db();


app.use("/api/files", require("./Routes/getfile"));
app.use("/files", require("./Routes/downloadfile"));
app.use("/files/download", require("./Routes/download"))

app.get("/", (req, res) => {
    return res.render('upload.ejs');
})

app.post("/show", async(req, res) => {
    try {
        const file = test({
            filename: "yes",
        })
        const response = await file.save()
        return res.json({ "done": "DONE" })

    } catch (error) {

    }

})



//Listener
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})