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

    //  addContact = text => {
    //   console.log(text)

    //   const contact = {
    //     id: nanoid(),
    //     // text,
    //     // number
    //   }

    formSubmitHandler = data => {
      this.repeatControl(data);
    };


  repeatControl = data => {
    let nameArray= [];
    nameArray = this.state.contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(' Контакт вже є у телефонній книзі!');
    }
  };
      // this.setState(({ contacts })=> ({
    //   //   contacts: [ contact, ...contacts],
    //   // }))

    //   console.log(this.state.contacts)
    // }

    // handleSubmit = e => {
    //   e.preventDefault()
    //   console.log(this.state)

    //   this.props.onSubmit(this.state.name);

    //   this.setState({name: ''})
    // }


  handleChange = e => {
      this.setState( {name: e.currentTarget.value})
    }
  
    setFilterToState = filterData => {
      this.setState({ ...this.state, filter: `${filterData}` });

    
    };

    
  filterArr = fArr => {
    let newArr = fArr.filter(cur =>
      cur.name.toUpperCase().includes(this.state.filter),
    );
    return newArr;
  };

    // addContact = name => {
    //   console.log(name)
    // }

    
  
    render () {

      

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
        <PhonebookForm onSubmit = {this.formSubmitHandler}     ></PhonebookForm>
        <Header header="Contacts"></Header>
        <FilterForm setFilterToState={this.setFilterToState}></FilterForm>
        <ContactsList contacts={this.filterArr(this.state.contacts)}>
        
        </ContactsList>
    </div>
     ) 
    };
  }

export default App;
