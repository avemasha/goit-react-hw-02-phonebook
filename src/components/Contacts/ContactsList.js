import React from "react";
import PropTypes from 'prop-types';

const ContactsList = ({contacts}) => (
    
       
        <ul className="ContactsList">
            { contacts.map(  ({id, text}) => (
                 <li key={id}>{text}</li>
            ))}
           
        </ul>
    

)

export default ContactsList;

// ContactsList.propTypes = {
//     text: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
// }