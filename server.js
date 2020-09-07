const express = require('express')
const app = express()
const test = require("./Models/test")

const PORT = process.env.PORT || 3000



const db = require('./config/db');
db();




app.use("/api/file", require("./Routes/getfile"));
app.use("/file", require("./Routes/downloadfile"));
app.use("/files/download", require("./Routes/download"))





//Listener
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})