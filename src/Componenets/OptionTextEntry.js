import React from "react";

/*
    Component for holding the characters of the user's option
    Displays a text entry box and allows the user to edit the option's text
*/
class OptionTextEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            textEntry:  ""      // text entered in by the user
        }
    }

    render(){
        return (
            <form>
                <input type="text"/>
            </form>
        )
    }
}

export default OptionTextEntry