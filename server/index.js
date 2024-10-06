const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "*",
}));

app.get("/", (req, res) => {
    res.send("Arya")

})

app.post("/", (req, res) => {
    console.log(req?.body);
    console.log(req?.files);
    res.json({ result: 'uploading video' })
})

app.listen(8000, () => {
    console.log("SERVER LISTENED");
})