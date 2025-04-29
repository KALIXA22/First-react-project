import React  from "react"; 
import '../styles/About.css';
import Pizza from "../assets/pizza.jpeg";
function About(){
    return(
       <>
        <div className="about-section">
            <div className="container">
                <img src="" alt="" style={{backgroundImage:`url(${Pizza})`}} />
            <p>We offer the most insightfful pizzas <br />
                that fit at your tastes in many different <br /> 
                paradigms!Yummy Pizzas come one come all</p>
                </div>
            </div>
        </>
    )  
 }

export default About;