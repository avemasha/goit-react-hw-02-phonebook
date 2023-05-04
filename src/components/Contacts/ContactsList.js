import React, {Component} from "react";
import PropTypes from 'prop-types';

import  './ContactsList.css'

class ContactsList extends Component  { 

    deleteId = Id => {
        this.props.del(Id);
      };

    createList = () => {
        return this.props.contacts.map (contact  => {
            return (
                <li key={contact.id}>
                  {`${contact.name}: ${contact.number}`}
                  <button type="button" className="deleteBtn"
                   onClick={() => this.deleteId(contact.id)}
                   >Delete</button>
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