import React from 'react';
import { connect } from 'react-redux';
import { menuLoaded, cartDeleted } from '../../actions';
import './cart-table.scss';

const CartTable = ({cartItems, deleteItemFromCartItems}) => {

    const items = cartItems.map(item => {
        return (
            <div className="cart__item">
                <img src={item.url} className="cart__item-img" alt={item.title}></img>
                <div className="cart__item-title">{item.title}</div>
                <div className="cart__item-price">{item.price}$</div>
                <div className="cart__close"
                    onClick={() => deleteItemFromCartItems(item.id)}
                >&times;</div>
            </div>
        )
    })

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">    
                {items}
            </div>
        </>
    );
};

const mapStateToProps = (state) => { // получаем из стора (редакс -конеект)
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = (dispatch) => { //записываем в стор с помощью фции  setMenuTStore
    return {
        deleteItemFromCartItems: (id) => dispatch(cartDeleted(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);