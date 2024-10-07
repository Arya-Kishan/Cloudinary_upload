import React, { useState } from 'react'

const VideoUpload = () => {
    const [video, setVideo] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("video", video);

        let res = await fetch(import.meta.env.VITE_SERVER_URL + "/video", {
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
                    <p>Video</p>
                    <input type="file" accept='video' onChange={(e) => setVideo(e.target.files[0])} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default VideoUpload