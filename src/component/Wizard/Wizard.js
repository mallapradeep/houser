import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Switch, Route} from 'react-router-dom';


import WizardOne from '../WizardOne/WizardOne';
import WizardTwo from '../WizardTwo/WizardTwo';
import WizardThree from '../WizardThree/WizardThree';


export default (
    <Switch>
        <Route  path="/wizard/wizardone" component={WizardOne} />
        <Route  path="/wizard/wizardtwo" component={WizardTwo} />
        <Route  path="/wizard/wizardthree" component={WizardThree} />
        </Switch>
);



// class Wizard extends Component {
//     constructor(){
//         super()

//         this.state={
//             name: '',
//             address: '',
//             city: '',
//             state: '',
//             zip: null
//         }
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleAddressChange = this.handleAddressChange.bind(this);
//         this.handleCityChange = this.handleCityChange.bind(this);
//         this.handleStateChange = this.handleStateChange.bind(this);
//         this.handleZipChange = this.handleZipChange.bind(this);

//     }

//     handleNameChange(event){
//         this.setState({name:event.target.value})

//     }
//     handleAddressChange(event){
//         this.setState({Address:event.target.value})

//     }
//     handleCityChange(event){
//         this.setState({City:event.target.value})

//     }
//     handleStateChange(event){
//         this.setState({State:event.target.value})

//     }
//     handleZipChange(event){
//         this.setState({Zip:event.target.value})

//     }

//     addHouses(){
//         const  newHouse = {
//             name: this.state.name,
//             address: this.state.address,
//             city:this.state.city,
//             state:this.state.state,
//             zip:this.state.zip
//           }
//           axios.post('/api/house/house', newHouse).then((res)=>{
//               this.setState({houses: res.data})
//           })
//         }

//     render(){
//         return(
//             <div>
//                 <form>
//                 <h1>Wizard </h1>
//                 <div className="box">

//                 <label>Property Name
//                 <input type="text" name="name" onChange={this.handleNameChange} />
//                 </label> <br/><br/>

//                 <label>Address
//                 <input type="text" name="Address" onChange={this.handleAddressChange} />
//                 </label><br/><br/>
                
//                 <label>City
//                 <input type="text" name="City" onChange={this.handleCityChange} />
//                 </label>

//                 <label>State
//                  <input type="text" name="State" onChange={this.handleStateChange} />
//                  </label>

//                  <label>Zip
//                 <input type="null" name="Zip" onChange={this.handleZipChange} />
//                 </label>

//                 </div>

//                 <Link to='/'><button>Cancel</button></Link>
//                 <Link to='/'><button onClick={(e) => this.addHouses(e)}>Complete</button></Link>
                
                
//                 </form>
//                 </div>
//         )
//     }
// }

// export default Wizard;