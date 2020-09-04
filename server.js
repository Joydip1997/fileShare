const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000



const db = require('./config/db');
db();


app.use("/api/files", require("./Routes/getfile"));
app.use("/files", require("./Routes/downloadfile"));
app.use("/files/download", require("./Routes/download"))

app.get("/", (req, res) => {
    return res.render('download.ejs', { uuid: "sasa", fileName: "sasa", fileSize: "sasa", downloadLink: "sasa" });
})



//Listener
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})