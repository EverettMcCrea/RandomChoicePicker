import { render } from "@testing-library/react";
import React from "react";

function OptionTitle (props){
    return (
        <text>Option {props.optNum} </text>     // use the props passed in from Option.js in the title
    )
}

export default OptionTitle