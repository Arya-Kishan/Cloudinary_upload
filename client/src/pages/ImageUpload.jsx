import React, { useState } from 'react'

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("image", image);

        let res = await fetch(import.meta.env.VITE_SERVER_URL + "/image", {
            method: "post",
            body: formdata
        })
        res = await res.json();
        console.log(res);
        setUploadedImage(res);
    }

    const deleteFile = async (public_id) => {

        let res = await fetch(import.meta.env.VITE_SERVER_URL, {
            method: "delete",
            body: JSON.stringify({ public_id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        res = await res.json();
        console.log(res);
    }

    const getUrl = (file) => {
        let url = URL.createObjectURL(file)
        return url;
    }


    return (
        <div>

            <div>
            </div>
            <form action="" onSubmit={handleSubmit}>
                {image && <img src={getUrl(image)} alt="" srcSet="" />}
                <div>
                    <p>Image</p>
                    <input type="file" accept='image' onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <button type='submit'>Submit</button>
            </form>

            {uploadedImage && <div className='box'>
                <img src={uploadedImage?.url?.secure_url} alt="" srcSet="" />
                <button onClick={() => deleteFile(uploadedImage.url.public_id)}>Delete from Cloudinary</button>
            </div>}

        </div>
    )
}

export default ImageUpload