import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
function Home()
{
return(
    <>
    <Navbar/>
    <h1>Welcome to the home page!</h1>
    <div id="mainHome">
    <p>You are going to learn a lot about 3D animation, its history, how it is made and much more!</p>
    <p>This site is dedicated to the art and science of 3D animation and computer-generated imagery, also called CGI,
     from the first sketch to the final render. Whether you're a fellow artist, a curious beginner, 
     or a creative professional, here you'll find a space where pixels come to life, characters breathe, 
     and worlds are built from wireframes and ideas.</p>
    <p>We explore everything from modeling, texturing, lighting, and rigging, to real-time animation, 
     VFX, and the latest industry tools and workflows. Dive into project breakdowns, behind-the-scenes processes,
    tutorials, and insights into how 3D and CGI shape modern storytelling in games, films, advertising, and beyond.</p>
    <p>Let’s bring imagination to motion — one frame at a time.</p>
    </div>
    </>
)


}





export default Home;