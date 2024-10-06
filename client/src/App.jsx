import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [image, setImage] = useState("arya");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image);

    let formdata = new FormData();
    formdata.append("arya", image)

    console.log(formdata);

    let res = await fetch(import.meta.env.VITE_SERVER_URL, {
      method: "post",
      body: formdata
    })
    res = await res.json();
    console.log(res);
  }

  return (
    <form action="" onSubmit={handleSubmit}>

      <div>
        <p> Image</p>
        <input type="file" name='arya' accept='image/svg' onChange={(e) => setImage(e.target.files[0])} />
      </div>

      <button>Upload</button>

    </form>
  )
}

export default App