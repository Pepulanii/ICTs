import React from "react"
import auth from "../../auth"
import "../addTech/AddTech.css"

const LandingPage = props => {

    return(
        <div>
            <h1>Landing Page</h1>
            <button 
                onClick={() =>{
                    auth.login(() => {
                        props.history.push("/home");
                    });
                }}
            >
                login
            </button>
        </div>
    )
}

export default LandingPage;