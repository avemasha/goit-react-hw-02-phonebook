import React from "react";
import { nanoid } from 'nanoid'
// import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';

import  './ContactsList.css'

export const ContactsList = ({ states, deleteContact }) =>  { 
    

  
      
        return(
          <ul> {
            
      states.map (state  => {
        return (
         
            <li key={nanoid()} id={state.id} >
              {`${state.name}: ${state.number}`}
              <button data-id={state.id} type="button" className="deleteBtn"
              onClick={() => deleteContact(state.id)}
               >Delete</button>
            </li> 
           )})
         } </ul>
        )

}





// ContactsList.propTypes = {
//     contacts: PropTypes.array.isRequired,
   
//   };
