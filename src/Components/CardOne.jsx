import React from "react";

const CardOne = () => {
    return(
        <div className="functionBox">
            <h1 className="functionHeading">This is created using functional component</h1>
            <p className="firstP">This is done using external CSS</p>
            <p style={{color: 'blue', fontSize: '1.6rem', fontWeight: '500'}}>This is done using external CSS</p>
        </div>
    )
}
export default CardOne;