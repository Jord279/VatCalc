import React from "react";

const DisplayBlock = (props) => {
    return (
        <div>
            {props.label} {props.value}
        </div>
    )  
}

export default DisplayBlock