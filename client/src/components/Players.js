import React from 'react';
import axios from 'axios';



class Players extends React.Component {
    constructor(){
        super();

        this.state = {
            players:[]
          };
    }
    
  
    componentDidMount() {
      axios.get(`http://localhost:5000/api/players`)
      
      .then(res => {console.log(res.data)
        this.setState({players:res.data})})
      .catch((err) => console.log(err));
    }
  
    render(){
      return(
        <div>
            {this.state.players.map(player=>
                <div className='content'>
                    <h1>{player.name}</h1>
                    <h3>Number of Searches: {player.searches}</h3>
                    <p>{player.country}</p>
                </div>
            )}
        </div>
      )
    }
  }


  export default Players;