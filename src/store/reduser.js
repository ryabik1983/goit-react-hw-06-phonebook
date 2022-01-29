import { combineReducers } from 'redux';
import { createReduser } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { addContact, deleteContact, filterContacts } from './actions';

const contactsReduser = createReduser([], {
  [addContact]: (state, {payload}) => {
    const {name, number} = payload;
    const newItem = {
      id: nanoid(),
      name: name,
      number: number,
    }
    let isUnique = state.some(el => el.name === name);
    console.log(isUnique);
    if (!isUnique) {
      return [...state, newItem];
    } else {
      alert(`${name} is already in contacts`);
    }
    return;
   },
   [deleteContact]: (state, {payload}) => [
     ...state.filter(el => el.id !== payload),
   ], 
});
const filterReduser = createReduser ('', {
  [filterContacts]: (_, {payload}) => payload,
});

export default combineReducers({
  contactsReduser,
  filterReduser,
});