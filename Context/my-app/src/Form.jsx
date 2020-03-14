import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }
    componentDidMount() {
        this.inputRef.current.focus()
    }
    render() { 
        return ( 
            <div>
                <form>
                    <input type="text" ref={this.inputRef}/>
                </form>
            </div>
         );
    }
}
 
export default Form;