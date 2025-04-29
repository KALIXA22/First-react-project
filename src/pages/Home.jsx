import React  from "react";

import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import '../styles/Home.css';
import BannerImage from "../assets/multiplePizzas.jpeg";

function Home(){
    return (
        <>
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>🍕Pizzeria</h1>
                <p>Pizza fit your tastee Yummy</p>
                <button>Order Now</button>
            </div>
        </div>
    <About /> {/* Render the About component here */}
      <Menu />    {/* Render the Menu component here */}
      <Contact />  {/* Render the Contact component here */}
        </>
    )
}
export default Home;