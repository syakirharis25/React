import React, { Component } from 'react';
import Front from './Front'

class Whatsapp extends Component {
    constructor(){
        super()
        this.state = {
            isTyping: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isTyping:false
            })
        }, 2000)
    }
    render() { 
        return ( 
            <div>
                {this.state.isTyping ? 'Your friend is typing': <Front />}
            </div>
         );
    }
}
 
export default Whatsapp;