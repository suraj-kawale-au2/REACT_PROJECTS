import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {toogleCartHidden} from '../../redux/cart/cart.action';

const Cart = ({cartItems,history,dispatch}) => (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {   
                cartItems.length?(
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                ):(
                <span className='empty-message'>Your Cart is Empty</span>)

            }
            </div>
            <CustomButton onClick={()=> {history.push('/checkout');
                                        dispatch(toogleCartHidden())
                                        }}>Go To Checkout</CustomButton>
        </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));
