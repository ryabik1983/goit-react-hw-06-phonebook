import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialStore = {
    contacts: {
      items: [],
      filter: ''
    }
  }

//   configureStore()
// createAction()

  const composeEnhancers = composeWithDevTools({
name: 'DO_NOT_FOLLOV_DIRTY_LINKS',
      });

const ACTIONS = {
        ADD_CONTACT: 'ADD_CONTACT',
        DELETE_CONTACT: 'DELETE_CONTACT',
        FILTER: 'FILTER'
    }
    export const addToCart = () => ({
        type: ACTIONS.ADD_TO_CART,
    })

function createReducer (state = initialStore, action) {
            switch (action.type) {
                case ACTIONS.ADD_CONTACT:
                    return {...state, balance: state.balance - 10, cart: 'full'};
            case ACTIONS.CLEAR_CART:
                return {...initialStore};
            case ACTIONS.CHECKOUT:
                return {...state, cart: 'null'};
            default:
                return state;
            }
        // if (action.type === 'AD_TO_CART') {
        //     return {...state, balance: state.balance - 10, cart: 'full'};
        //     }
        //     return state;
    }
const store = createStore(
        contactsReduser
        // composeEnhancers(
        //     applyMiddleware()
            // other store enhancers if any
          );
    
