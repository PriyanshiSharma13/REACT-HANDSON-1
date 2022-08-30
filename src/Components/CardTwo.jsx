import React from "react";

class CardTwo extends React.Component{
   
    render(){
        return(
            <>
                <div className="classBox">
                <h1 className="classHeading">This is created using class component</h1>
                <p className="firsttP">This is done using external CSS</p>
                <p style={{color: 'indigo', fontSize: '1.6rem', fontWeight: '500'}}>This is done using external CSS</p>
                </div>
            </>
        )
    }
}

export default CardTwo;