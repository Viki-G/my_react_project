import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
function Home()
{
return(
    <>
    <Navbar/>
    <br></br>
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
    <br></br>
    <div className="hover-card">
  <div className="image-container">
    <img src="/images/process.jpg" alt="Animation process" className="preview main-image" />
    <div className="overlay">
      <p>Filled with gorgeous illustrations and concept art from the hit Netflix series, The Art and Making of Arcane is an immersive journey behind the scenes of the Emmy Award-winning Animated Series!

The Art and Making of Arcane takes readers through the visual journey of Riot Games’ and Fortiche's revolutionary animated series. Featuring early art styles, evolving character designs, and jaw-dropping worldbuilding artwork, this volume is the definitive compendium of Arcane’s creative process and vision.</p>
    </div>
  </div>
</div>
    </>
)


}





export default Home;