import express from "express"
import 'dotenv/config'
import fileUpload from "express-fileupload"
import cors from "cors"
import { upload } from "./middleware/multer.middleware.js";
import { getUrl } from "./services/cloudinary.js";

const app = express();

// app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "*",
}));

app.get("/", (req, res) => {
    res.json({ topic: "Working on uploading all types of files image,video and pdf through cloudinary" })

})

app.post("/", upload.single("arya"), async (req, res) => {
    try {
        let url = await getUrl(req?.file)
        res.status(200).json({ url: url, success: true })
    } catch (error) {
        console.log(error);
        res.status(400).json({ url: null, success: false })
    }
})

console.log(process.env.PORT);


app.listen(8000, () => {
    console.log("SERVER LISTENED");
})