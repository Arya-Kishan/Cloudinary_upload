import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav_head'>Cloudinary Upload</div>
            <div className='nav_links'>
                <Link to={"/"}>Home</Link>
                <Link to={"/image"}>Image</Link>
                <Link to={"/audio"}>Audio</Link>
                <Link to={"/video"}>Video</Link>
                <Link to={"/mix"}>Mix</Link>
            </div>
        </div>
    )
}

export default Navbar