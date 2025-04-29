import React from "react";

function TestimonialItem({image,name,desc}){
    return(
        <div className="testimonials-content">
            <div className="testimonial-container"
            style={{backgroundImage: `url(${image})`}}>
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}
export default TestimonialItem;