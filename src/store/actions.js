export const deleteContact = value => ({
    type: 'CONTACT_DELETE',
    payload: value, 
});
export const addContact = value => ({
    type: 'CONTACT_ADD',
    payload: value, 
});

export filterContact = value => ({
    type: 'CONTACT_FILTER',
    payload: value, 
});
// const ACTIONS = {
    // //         ADD_CONTACT: 'ADD_CONTACT',
    // //         
    // //         FILTER: 'FILTER'
    // //     }
    // //     export const addToCart = () => ({
    // //         type: ACTIONS.ADD_TO_CART,
    // //     })