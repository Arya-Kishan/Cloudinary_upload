import React, { useState } from 'react'

const MixUpload = () => {

    const [image, setImage] = useState();
    const [audio, setAudio] = useState();
    const [video, setVideo] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("image", image);
        formdata.append("audio", audio);
        formdata.append("video", video);

        let res = await fetch(import.meta.env.VITE_SERVER_URL + "/mix", {
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
                <div>
                    <p>Audio</p>
                    <input type="file" accept='audio' onChange={(e) => setAudio(e.target.files[0])} />
                </div>
                <div>
                    <p>Video</p>
                    <input type="file" accept='video' onChange={(e) => setVideo(e.target.files[0])} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default MixUpload