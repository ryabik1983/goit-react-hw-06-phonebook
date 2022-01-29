import {createAction} from '@reduxjs/tollkit';

export const addContact = createAction('add');
export const deleteContact = createAction('delete');
export const filterContacts = createAction('filter');
