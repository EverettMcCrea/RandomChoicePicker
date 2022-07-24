import React from "react";
import '../Styling/TitleInfo.css'

/*
    This component is the title for the web app
    It displays an h1 with the name of the web app, 
    and an h2 with a brief description of the web app.
*/
function TitleInfo (){
    return (
        <div className="All-text">
            <h1 className="Title-text">Spinner Web App</h1>
            <h2 className="Subtitle-text">Each options percentage is based off of (option value / combined value of options)</h2>
        </div>
    )
}

export default TitleInfo