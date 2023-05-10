import React from "react";
import './Filter.css'


const FilterForm = ({setFilterValue, filter}) => {
    // setFilterValue = event => {
    //     let value = event.currentTarget.value.toUpperCase();
    //     this.props.setFilterToState(value);
    // }
         
            return (
              <div>
                <h4>Find contacts by name</h4>
                <input placeholder="Enter contact name" filter = {filter} onChange={setFilterValue}></input>
                
              </div>
            );
          }
    


    export default FilterForm