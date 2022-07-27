import React from "react";
import TitleInfo from './Componenets/TitleInfo'
import Option from "./Componenets/Option";

class ChoicePicker extends React.Component {
    // Will probably need this later if I implement state mechanics
    // constructor () {
    //     super()
    // }

    render() {
        return(
            <div>
                <TitleInfo />
                <Option/>
            </div>
        )
    }
}

export default ChoicePicker;