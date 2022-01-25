import {createStore} from 'redux';

const initialState = {
    contacts: {
      items: [],
      filter: ''
    }
  };

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case 'CONTACT_ADD':
            return {contacts.items: state.contacts.items},
        case 'CONTACT_DELETE':
            return {contacts.items: state.contacts.items},
    default: 
    return state;
    }
}