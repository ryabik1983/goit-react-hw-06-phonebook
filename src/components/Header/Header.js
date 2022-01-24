// import { connect } from "react-redux";
// import { addToCart } from '../../store/index';

// const HeaderComponent = (balance, value, addToCart) => {
//     const { cart } = {balance: 99, cart: 'not_ready'};
    
//     return (
//         <header>
//             <h3>Balance: {balance} / {value}</h3>
//             <h3>Cart: {cart}</h3>
//             <button onClick = {addToCart}>Add to cart</button>
//         </header>
//     )
// }
// import {connect} from 'react-redux';

// const HeaderComponent = ({balance}) => {
//     const {cart} = {balance: 99, cart: 'not_ready' };
//     return (
//         <header>
//             <h3>Balance: {balance}</h3>
//             <h3>Cart: {cart}</h3>
//         </header>
//     );
// };
// const mapStateToProps = (store) => ({
//     balance: store.balance,
// });

// export const Header = connect (mapStateToProps)(HeaderComponent);
// const mapStateToProps = store => ({
//     balance: store.balance,
// })
// const mapDispatchToProps = dispatch => ({
//     addToCart,
// });
// export const Header = connect(mapStateToProps)(HeaderComponent);