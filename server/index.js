import express from "express"
import 'dotenv/config'
import cors from "cors"
import async from 'async'
import { audioUpload, imageUpload, mixUpload, videoUpload } from "./middleware/multer.middleware.js";
import { deleteFile, getAudioUrl, getImageUrl, getVideoUrl } from "./services/cloudinary.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: "*",
}));

app.get("/", (req, res) => {
    res.json({ topic: "Working on uploading all types of files image,video and pdf through cloudinary" })
})

app.post("/image", imageUpload, async (req, res) => {
    let url = await getImageUrl(req.file);
    res.status(200).json({ url: url, success: true })
})

app.post("/video", videoUpload, async (req, res) => {
    let url = await getVideoUrl(req.file);
    res.status(200).json({ url: url, success: true })
})

app.post("/audio", audioUpload, async (req, res) => {
    let url = await getAudioUrl(req.file);
    res.status(200).json({ url: url, success: true })
})


app.post("/mix", mixUpload, async (req, res) => {

    async.parallel([
        function (callback) {
            console.log("one");
            getImageUrl(req.files.image[0])
                .then((res) => {
                    callback(null, { image: res });
                })
                .catch((error) => {
                    callback(error, { image: "error" });
                })
        },
        function (callback) {
            console.log("two");
            getVideoUrl(req.files.video[0])
                .then((res) => {
                    callback(null, { video: res });
                })
                .catch((error) => {
                    callback(error, { video: "error" });
                })
        },
        function (callback) {
            console.log("three");
            getAudioUrl(req.files.audio[0])
                .then((res) => {
                    callback(null, { audio: res });
                })
                .catch((error) => {
                    callback(error, { audio: "error" });
                })
        },
    ], function (err, results) {

        if (results) {
            console.log(results);
            res.status(200).json({ urls: results, success: true })
        } else {
            res.status(400).json({ urls: null, success: false, error: err })
        }

    });

})


app.delete("/", async (req, res) => {
    console.log(req.body);
    let result = await deleteFile(req.body.public_id);
    console.log(result);
    res.status(200).json({ url: "delte", success: true, result: result })
})

console.log(process.env.PORT);


app.listen(8000, () => {
    console.log("SERVER LISTENED");
})