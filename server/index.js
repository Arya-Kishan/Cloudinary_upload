const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
require("dotenv").config()

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "*",
}));

app.get("/", (req, res) => {
    res.json({ topic: "Working on uploading all types of files image,video and pdf through cloudinary" })

})

app.post("/", (req, res) => {
    console.log(req?.body);
    console.log(req?.files);
    res.json({ result: 'uploading video' })
})

console.log(process.env.PORT);


app.listen(8000, () => {
    console.log("SERVER LISTENED");
})