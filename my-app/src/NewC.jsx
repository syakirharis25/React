import React, { Component } from 'react';
import {Consumer} from './Context'

class NewC extends Component {
    
    render() { 
        return ( 
            <Consumer>
                {(username) => {
                    return <div>
                        My name is {username}
                    </div>
                }}
            </Consumer>
         );
    }
}
 
export default NewC;