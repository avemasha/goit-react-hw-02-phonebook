import React, {Component} from "react";
import './Filter.css'


class FilterForm extends Component {
    setFilterValue = event => {
        let value = event.currentTarget.value.toUpperCase();
        this.props.setFilterToState(value);
    }
        render() {
            return (
              <div>
                <h4>Find contacts by name</h4>
                <input placeholder="Enter contact name" onChange={this.setFilterValue}></input>
                
              </div>
            );
          }
    }


    export default FilterForm