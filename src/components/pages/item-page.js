import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc/';
import Spinner from '../spinner';
import { menuLoaded, menuRequested, menuError } from '../../actions';

import './itemPage.scss';

const ItemPage = ({ RestoService, menuItems, loading, match, setMenuToStore, setLoadingToStore, setErrorToStore }) => {
    
    console.log(menuItems)

    useEffect(() => {
        if (menuItems.length === 0) {
            setLoadingToStore();
            RestoService.getMenuItems()
                .then(res => setMenuToStore(res))
                .catch(err => setErrorToStore())
        }
    }, [])


    if (loading) {
        return (
            <div className="item_page">
                <Spinner />
            </div>
        )
    }

    const item = menuItems.find(el => +el.id === +match.params.id);
    console.log(item)
    const { title, category, price, url } = item;

    return (
        <div className="item_page">
            <div className="menu__item item_block">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn">Add to cart</button>
                <span className={`menu__category_Img ${category}`}></span>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    console.log(state.menu)
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setMenuToStore: (newState) => dispatch(menuLoaded(newState)),
//         setLoadingToStore: () => dispatch(menuRequested()),
//         setErrorToStore: () => dispatch(menuError())
//     }
// }
const mapDispatchToProps = { 
    setMenuToStore: menuLoaded,
    setLoadingToStore: menuRequested,
    setErrorToStore: menuError
}

// export default ItemPage;
export default WithRestoService()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );