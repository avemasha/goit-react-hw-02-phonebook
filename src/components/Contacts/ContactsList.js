import React, {Component} from "react";
import PropTypes from 'prop-types';

import css from './ContactsList.css'

class ContactsList extends Component  { 

    createList = () => {
        return this.props.contacts.map (contact  => {
            return (
                <li key={contact.id}>
                  {`${contact.name}: ${contact.number}`}
                  <button type="button" className="deleteBtn">Delete</button>
                </li> )})
        }

    
      render (){
        return(
      <ul>{this.createList()}</ul>
    
        )

}}

export default ContactsList;

// ContactsList.propTypes = {
//     text: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
// }

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
   
  };

ContactsList.defaultProps = {
    contacts: [],
  };