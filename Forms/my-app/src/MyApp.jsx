import React, { Component } from 'react';
import './index.css'

class MyApp extends Component {
    constructor(){
        super()
        this.state = {
            firstnam: '',
            lastname: '',
            school:''
        }
        this.firstChange = this.firstChange.bind(this)
        this.secondChange = this.secondChange.bind(this)
        this.thirdChange = this.thirdChange.bind(this)
    }

    firstChange(event){
        this.setState({
            firstname:event.target.value
        })
    }

    secondChange(event){
        this.setState({
            lastname:event.target.value
        })
    }

    thirdChange(event){
        this.setState({
            school:event.target.value
        })
    }

    render() { 
        return ( 
            <div>
                <form>
                    <input placeholder='first name' 
                    value = {this.state.firstname}
                    onChange={this.firstChange}
                    type='text' />

                    <input placeholder='last name'
                    value={this.state.lastname}
                    onChange={this.secondChange}
                    type='text' />

                    <input placeholder='school'
                    value ={this.state.school}
                    onChange={this.thirdChange}
                    type='text' />
                </form>

                <h1 className='head'>This is to certify that</h1>
                <h5 className='firstname'>{this.state.firstname}</h5>
                <h5 className='lastname'>{this.state.lastname}</h5>
                <h5 className='school'>That Attended</h5>
                <h5 className='school'>{this.state.school}</h5>
                <h2 className='head'>Has been awarded a diploma in software engineering</h2>
                <button className='button'>Print</button>
            </div>
         );
    }
}
 
export default MyApp;