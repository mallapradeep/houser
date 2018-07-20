import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
//import { connect } from 'react-redux';

import WizardOne from '../WizardOne/WizardOne';

import WizardThree from '../WizardThree/WizardThree';




class WizardTwo extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        }
        this.handleImageChange = this.handleImageChange.bind(this);
       
    }

    handleImageChange(event){
        this.setState({name:event.target.value})

    }
   
   

    render(){
        return(
            <div>
                <form>
                <h1>Add New Listing </h1>
                <div className="box">

                <label>Image URL
                <input type="text" name="imageurl" onChange={this.handleImageChange} />
                </label> <br/><br/>

                </div>

                <Link to='/WizardOne'><button>Previous Step</button></Link>
                <Link to='/WizardThree'><button >Next Step</button></Link>
                
                
                </form>
                </div>
        )
    }
}

export default WizardTwo;