import { nanoid } from 'nanoid'
import Header from "./Header/Header";

import React, { Component} from "react";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import ContactsList from "./Contacts/ContactsList";


  class App extends Component {

    state = {
      contacts: [],
      name: ''
    }

     addContact = text => {
      console.log(text)

      const contact = {
        id: nanoid(),
        text,
      }


      this.setState(({ contacts })=> ({
        contacts: [ contact, ...contacts],
      }))

      console.log(this.state.contacts)
    }

    handleSubmit = e => {
      e.preventDefault()
      console.log(this.state)

      this.props.onSubmit(this.state.name);

      this.setState({name: ''})
    }


  handleChange = e => {
      this.setState( {name: e.currentTarget.value})
    }
  

    // addContact = name => {
    //   console.log(name)
    // }

    
  
    render () {

      const {contacts} = this.state;

      return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column' ,
          // justifyContent: 'center',
          alignItems: 'flex-start',
          marginLeft: '30px'
          
        }}
      >
        <Header header="Phonebook"></Header>
        <PhonebookForm onSubmit = {this.addContact} onChange={this.handleChange}  value={this.state.name} ></PhonebookForm>
        <Header header="Contacts"></Header>
        <ContactsList contacts = {contacts} ></ContactsList>
    </div>
     ) 
    };
  }

export default App;
