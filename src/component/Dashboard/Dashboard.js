import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            houses: []
        }
    }
    componentDidMount() {
    axios.get('/api/houses').then((res) =>{
        this.setState({ houses: res.data})
    } )
    }

    removeHouse(id) {(req,res) => {
        axios.delete(`/api/houses/${id}`)
       this.setState({houses: res.data})
    }}

    render(){
    //     const newHouse= this.houses.map((element, i)=>
    //     (
    //         <div key={i}>
    //         <h3>{element.name}</h3>
    //         <h3>{element.address}</h3>
    //         <h3>{element.city}</h3>
    //         <h3>{element.state}</h3>
    //         <h3>{element.zip}</h3>
    //         </div>
    //     )
    // )
     
        return(
            <div>
                <h1>Dashboard</h1>

                {/* {newHouse}
                {this.props.getAll} */}


                <Link to='/Wizard'><button>Add New Property</button></Link>
                <House/>
                

                </div>
        )
    }
}

export default Dashboard;
