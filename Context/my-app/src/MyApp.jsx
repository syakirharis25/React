import React, { Component } from 'react';
import NewA from './NewA'
import {Provider} from './Context'

class MyApp extends Component {
    
    render() { 
        return ( 
            <Provider value="Joseph Brendan">
                <NewA />
            </Provider>
         );
    }
}
 
export default MyApp;