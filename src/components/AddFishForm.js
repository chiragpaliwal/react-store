import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddFishForm extends Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  }
  createFish = (e) => {
      e.preventDefault();
      const fish = {
          name: this.nameRef.value.value,
          price: parseInt(this.priceRef.value.value),
          status: this.statusRef.value.value,
          desc: this.descRef.value.value,
          image: this.imageRef.value.value
      }

    this.props.addFish(fish);
    e.currentTarget.reset();
  }
  render() {
    return (
        <form className="fish-edit" onSubmit={this.createFish}>
            <input type="text" ref={this.nameRef} name="name" placeholder="Name" />
            <input type="text" ref={this.priceRef} name="price" placeholder="Price" />
            <select ref={this.statusRef} name="status">
                <option value="available">Fresh!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea type="text" ref={this.descRef} name="desc" placeholder="Description" />
            <input type="text" ref={this.imageRef} name="image" placeholder="Image" />
            <button type="submit">+ Add Fish</button>
        </form>    
    )
  }
}
