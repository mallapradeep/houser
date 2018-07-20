import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import WizardTwo from '../WizardTwo/WizardTwo';





class WizardThree extends Component {
    constructor(){
        super()

        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        }
        this.handleMortageChange = this.handleMortageChange.bind(this);
       
    }

    handleMortageChange(event){
        this.setState({mortage:event.target.value})

    }
    handleMonthlyChange(event){
        this.setState({monthly:event.target.value})

    }

    addHouses(){
        const  newHouse = {
            name: this.state.name,
            address: this.state.address,
            city:this.state.city,
            state:this.state.state,
            zip:this.state.zip
          }
          axios.post('/api/house/house', newHouse).then((res)=>{
              this.setState({houses: res.data})
          })
        }
   
   

    render(){
        return(
            <div>
                <form>
                <h1>Add New Listing </h1>
                <h3>Recommended Rent:$0</h3>
                <div className="box">

                <label>Monthly Mortgage Amount
                <input type="text" name="mortage" onChange={this.handleMortageChange} />
                </label> <br/><br/>

                  <label>Desired Monthly Rent
                <input type="text" name="monthly" onChange={this.handleMonthlyChange} />
                </label> <br/><br/>


                </div>

                <Link to='/WizardTwo'><button>Previous Step</button></Link>
                <Link to='/Dashboard'><button onClick={(e) => this.addHouses(e)} >Complete</button></Link>
                
                
                </form>
                </div>
        )
    }
}

export default WizardThree;