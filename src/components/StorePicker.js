import React, {Component} from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types'

class StorePicker extends Component {
    static propTypes = {
        history: PropTypes.object
    }
    
    myInput = React.createRef();

    goToStore = (event) =>{
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`); 
    }
    render() {
      return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Pick a Store</h2>
            <input 
                type="text" 
                ref={this.myInput}
                className="store-picker" 
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()}>
            </input>
            <button type="submit">Visit Store</button>
        </form>
      )
    }
}

export default StorePicker