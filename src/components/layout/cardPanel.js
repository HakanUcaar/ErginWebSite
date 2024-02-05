import React from "react";



const CardPanel = (props) => {
    return (
        <div className="card shadow-lg flex flex-wrap  gap-3" style={props.style}>
            {props.children}
        </div>
    );
  }
  
  export default CardPanel;
