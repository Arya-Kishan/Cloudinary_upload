import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name: 'dwvuqahw2',
    api_key: '563441375781984',
    api_secret: 'x2dEVPTIwie3i9dBNG2-wyCMz1Y'
});

export const getUrl = async (file) => {

    console.log(file);
    console.log(file.path);

    try {

        const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
            folder: 'arya_practice'
        });
        fs.unlinkSync(file.path)

        return cloudinaryResponse.secure_url;

    } catch (error) {
        fs.unlinkSync(file.path)
        console.log(error);
        console.log("ERROR IN UPLOADING");
    }

}