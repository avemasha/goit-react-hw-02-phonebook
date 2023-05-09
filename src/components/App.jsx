import { nanoid } from 'nanoid'
import Header from "./Header/Header";

import React, { Component} from "react";
import PhonebookForm from "./PhonebookForm/PhonebookForm";
import ContactsList from "./Contacts/ContactsList";
import FilterForm from './Filter/Filter';


  class App extends Component {

    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter:'',
      
    }

   


    formSubmitHandler = data => {
    
  
   
    const isExist = this.state.contacts.find(cont => data === cont.name)

    if (isExist) { 
   
       return alert(' Контакт вже є у телефонній книзі!');
     
    }
   
       this.setState(prevState => {
        return {
           contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: data.name, number: data.number },
          ]
        }
        } );
    
     
   
  };
      

   

 
  
   setFilterToState = filterData => {
      this.setState({  filter: `${filterData}` });

    
    };

    
  filterArr = () => {
   return this.state.contacts.filter(filteredCont =>
    filteredCont.name.toUpperCase().includes(this.state.filter),
    );
  
  };
    // elementDelete = (array, contactId) => {
    //   let newArr = array.filter(elem => elem.id !== contactId);
    //   return newArr;
    // };
  
    deleteContact = contactId => {
      // let newArrAfterDel = this.elementDelete(this.state.contacts, contactId);
      this.setState(prevState => ({
        
        contacts: [...prevState.contacts.filter(elem => elem.id !== contactId)]
      })
      )
    };
  

    
  
    render () {

      const contacts = this.filterArr()
      

      return (
      <div
        style={{
         
          display: 'flex',
          flexDirection: 'column' ,
        
          alignItems: 'flex-start',
          marginLeft: '30px'
          
        }}
      >
        <Header header="Phonebook"></Header>
        <PhonebookForm onSubmit = {this.formSubmitHandler}     />
        <Header header="Contacts"></Header>
        <FilterForm setFilterToState={this.setFilterToState}/>
        <ContactsList contacts={contacts}  del={this.deleteContact}/>
        
       
    </div>
     ) 
    };
  }

export default App;
