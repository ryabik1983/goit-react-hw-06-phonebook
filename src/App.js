
import './App.css';
// import {store} from './store/index';
import React from 'react';
// import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import * as actions from './store/action';
// import useLocalStorage from './components/uselocalstorage/uselocalstorage';

// import Modal from './components/Modal/Modal';
import './App.css';
// import { Header } from './components/Header';



export default function App() {

const dispatch = useDispatch()

return (
  
<main className="main">
    {/* <Header value = {21}/> */}
    <h1 className="title">Phonebook</h1>
    <ContactForm onSubmit={(name, number) => dispatch(actions.addContact(name, number))}
    />
    <h2 className="title">Contacts</h2>
    <Filter/>
    <ContactsList/>
  </main>
   
)  
};