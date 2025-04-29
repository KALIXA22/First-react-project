import React  from "react";
import {MenuItems}from "../helpers/MenuItems";
import MenuItem from "../components/MenuItem";
import '../styles/Menu.css';

function Menu (){
    return(
        <div className="menu">
            <h2 className="menuTitle">Our Menu</h2>
                <div>
                    <div className="menuList">
                        {MenuItems.map((menuItem,key)=>{
                            return( <MenuItem
                            key={key}
                            image={menuItem.image}
                            name={menuItem.price}
                            />

                            )
                        })}
                    </div>
                </div>
        </div>
    )
}
export default Menu;