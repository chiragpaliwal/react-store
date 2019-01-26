import React, { Component } from 'react'
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm'
import PropTypes from 'prop-types'

export default class Inventory extends Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFish: PropTypes.func,
  }
  render() {
    return (
      <div className="inventory">
        <h1>Inventory</h1>
        {Object.keys(this.props.fishes).map(key => 
          <EditFishForm 
            key={key} 
            index={key}
            fish={this.props.fishes[key]} 
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        )}
        <AddFishForm addFish={this.props.addFish}/>

        <button onClick={this.props.loadSampleFish}>Load Sample Fishes</button>
      </div>
    )
  }
}