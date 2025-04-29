import React from "react";

function MenuItem({ image, name, price, }) {
    return (
        <div className="menuItem">
            <div className="imageContainer" style={{ backgroundImage: `url(${image})` }}>
            <h2>{name}</h2>
            <p>{price}</p>

            </div>
        </div>
    );
}
export default MenuItem;