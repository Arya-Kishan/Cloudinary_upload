import React, { useState } from 'react'

const AudioUpload = () => {
    const [audio, setAudio] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("audio", audio);

        let res = await fetch(import.meta.env.VITE_SERVER_URL + "/audio", {
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
                    <p>Audio</p>
                    <input type="file" accept='audio' onChange={(e) => setAudio(e.target.files[0])} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AudioUpload