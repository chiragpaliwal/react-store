import React, {Component} from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) =>{
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFish = () =>{
    console.log("Loading Sample Fishes!");
    this.setState({fishes: sampleFishes});
  };

  addToOrder = (key) =>{
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
            </ul>
        </div>

        <Order />
        <Inventory addFish={this.addFish} loadSampleFish={this.loadSampleFish}/>
      </div>
    )
  }
}

export default App;