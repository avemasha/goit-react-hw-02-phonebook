import React, {Component} from "react";

import './PhonebookForm.css'

const PhonebookForm = ({onSubmit, onChange}) => 

    // state = {
       
    //     name: ''
    //   }
    
    // handleSubmit = e => {
    //     e.preventDefault()
    //     console.log(this.state)
  
    //     this.props.onSubmit(this.state.name);
  
    //     this.setState({name: ''})
    //   }


    // handleChange = e => {
    //     this.setState( {name: e.currentTarget.value})
    //   }
    
  
    //   addContact = name => {
    //     console.log(name)
    //   }

  
 (
        <form onSubmit={onSubmit} >
            <label>Name
            <input
            id="input"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  placeholder="Enter name"
  onChange={onChange}

/>
            </label>

        <button type="submit">Add contact</button>
        </form>
        
    )


export default PhonebookForm;

// PhonebookForm.propTypes = {

// 