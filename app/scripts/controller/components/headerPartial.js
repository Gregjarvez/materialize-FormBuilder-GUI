import React from "react";
import Float from "./Floater";

function Header (props){
    return (
        <div className="factory"
             onMouseEnter={props.mouseIn}
             onMouseLeave={props.mouseOut}
        >
            {
                props.visible &&
                <Float id={props.id} del={props.destruct}/>
            }
            {props.children}
        </div>
    );
}

export default Header;