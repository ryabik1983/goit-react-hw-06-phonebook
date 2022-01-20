import {createStore} from 'redux';

const initialStore = {
    cart: null,
    balance: 100,
    }
    const ACTIONS = {
        ADD_TO_CART: 'ADD_TO_CART',
        CLEAR_CART: 'CLEAR_CART',
        CHECKOUT: 'CHECKOUT'
    }

    const reduser = (state = initialStore, action) => {
            switch (action.type) {
                case ACTIONS.ADD_TO_CART:
                    return {...state, balance: state.balance - 10, cart: 'full'};
            case ACTIONS.CLEAR_CART:
                return {...initialStore};
            case ACTIONS.CHECKOUT:
                return {...state, cart: 'null'};
            default:
                return store;
            }
        // if (action.type === 'AD_TO_CART') {
        //     return {...state, balance: state.balance - 10, cart: 'full'};
        //     }
        //     return state;
    }
    export const store = createStore(reduser);
