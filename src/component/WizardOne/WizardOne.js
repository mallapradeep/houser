

import { connect } from 'react-redux';
import Wizard from '../Wizard/Wizard';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import WizardTwo from '../WizardTwo/WizardTwo';




class WizardOne extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);

    }

    handleNameChange(event){
        this.setState({name:event.target.value})

    }
    handleAddressChange(event){
        this.setState({Address:event.target.value})

    }
    handleCityChange(event){
        this.setState({City:event.target.value})

    }
    handleStateChange(event){
        this.setState({State:event.target.value})

    }
    handleZipChange(event){
        this.setState({Zip:event.target.value})

    }

   

    render(){
        return(
            <div>
                <form>
                <h1>Add New Listing</h1>
                <div className="box">

                <label>Property Name
                <input type="text" name="name" onChange={this.handleNameChange} />
                </label> <br/><br/>

                <label>Address
                <input type="text" name="Address" onChange={this.handleAddressChange} />
                </label><br/><br/>
                
                <label>City
                <input type="text" name="City" onChange={this.handleCityChange} />
                </label>

                <label>State
                 <input type="text" name="State" onChange={this.handleStateChange} />
                 </label>

                 <label>Zip
                <input type="null" name="Zip" onChange={this.handleZipChange} />
                </label>

                </div>

                <Link to='/'><button>Cancel</button></Link>
                <Link to='/wizardtwo'><button>Next Step</button></Link>
                
                
                </form>
                </div>
        )
    }
}

export default WizardOne;