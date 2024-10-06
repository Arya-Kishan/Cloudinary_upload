import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [name, setName] = useState("arya");
  const [video, setVideo] = useState("arya");
  const [image, setImage] = useState("arya");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(image);
    console.log(video);

    let formdata = new FormData();
    formdata.append("name", name)
    formdata.append("image", image)
    // formdata.append("video", video)

    console.log(formdata);

    let res = await fetch("http://localhost:8000", {
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data"
        // "Content-Type": "application/json"
      },
      body: formdata
    })
    res = await res.json();
    console.log(res);
  }

  const upload = async (form_data) => {

  }

  return (
    <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>

      <div>
        <p>Name</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <p> Image</p>
        <input type="file" name='img' accept='image/svg' onChange={(e) => setImage(e.target.files)} />
      </div>

      <div>
        <p>Video</p>
        <input type="file" name='vid' accept='video/mp4' onChange={(e) => setVideo(e.target.files)} />
      </div>

      <button>Upload</button>

    </form>
  )
}

export default App