
import './App.css';
// import {store} from './store/index';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactList';
import useLocalStorage from './components/uselocalstorage/uselocalstorage';
// import Modal from './components/Modal/Modal';
import './App.css';
import { Header } from './components/Header';
import { Provider } from 'react-redux';


function App() {


  const [filter, setFilter] = useState ('');
const [contacts, setContacts] = useLocalStorage('contacts', []);

const formSubmitData = ({ name, number }) => {
  const newItem = { id: nanoid(), name: name, number: number };
  let isUnique = contacts.some(el => el.name === name);
  if (!isUnique) {
    setContacts(prevContacts => {
      return [...prevContacts, newItem];
    });
  } else {
    alert(`${name} is already in contacts`);
  }
};

const changeFilter = e => {
  setFilter(e.currentTarget.value);
};

const renderContacts = () => {
  const toLowerCaseFilter = filter.toLowerCase();
  return contacts.filter(el =>
    el.name.toLowerCase().includes(toLowerCaseFilter),
  );
};

const deleteContact = id => {
  setContacts(prevContacts => {
    return prevContacts.filter(el => el.id !== id);
  });
};

return (
  
<main className="main">
    <Header value = {21}/>
    <h1 className="title">Phonebook</h1>
    <ContactForm onSubmit={formSubmitData} />
    <h2 className="title">Contacts</h2>
    <Filter value={filter} onChange={changeFilter} />
    <ContactsList
      renderContacts={renderContacts()}
      deleteContact={deleteContact}
    />
  </main>
   
)  
  };


export default App;
