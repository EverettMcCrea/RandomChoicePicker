import React from "react";
import OptionTitle from "./OptionTitle";

/*
    Component for holding all the various components associated with an option
*/
class Option extends React.Component {
    render() {
        return <OptionTitle optNum="3" />   // example of how to create a component and pass it props
    }
}

export default Option