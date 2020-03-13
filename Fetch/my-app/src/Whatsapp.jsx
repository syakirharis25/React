import React, { Component } from 'react';

class Whatsapp extends Component {
    constructor() {
        super()
        this.state = {
            mainData: {}
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/people/1/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    mainData:data
                })
            })
    }
    render() { 
        return ( 
            <div>
                {this.state.mainData.name}
            </div>
         );
    }
}
 
export default Whatsapp;