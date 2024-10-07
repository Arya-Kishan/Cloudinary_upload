import React, { useState } from 'react'

const ImageUpload = () => {
    const [image, setImage] = useState();

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
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <p>Image</p>
                    <input type="file" accept='image' onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ImageUpload