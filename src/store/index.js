import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialStore = {
    cart: 'empty',
    balance: 100,
    }
const composeEnhancers = composeWithDevTools({
name: 'DO_NOT_FOLLOV_DIRTY_LINKS',
      });

const ACTIONS = {
        ADD_TO_CART: 'ADD_TO_CART',
        CLEAR_CART: 'CLEAR_CART',
        CHECKOUT: 'CHECKOUT'
    }
    export const addToCart = () => ({
        type: ACTIONS.ADD_TO_CART,
    })

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
    export const store = createStore(
        reduser,
        composeEnhancers(
            applyMiddleware()
            // other store enhancers if any
          )
        );
