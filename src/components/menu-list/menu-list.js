import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import MenuListItem from '../menu-list-item';
import { menuLoaded, menuRequeted, menuError } from '../../actions';
import Spinner from '../spinner/'
import Error from '../error/'
import './menu-list.scss';

const MenuList = ({ RestoService, setMenuToStore, setLoading, setError, menuItems, loading, error }) => { // классовый компонент ниже в комментах
    console.log(loading)
    useEffect(() => {
        setLoading();
        RestoService.getMenuItems()
            .then(res => setMenuToStore(res))
            .catch(err => setError())
    }, [])

    if(loading) {
        return <Spinner/>
    }
    if(error) {
        return <Error/>
    }

    return (
        <ul className="menu__list">
            {menuItems.map(item => {
                return (
                    <MenuListItem key={item.id} menuItem={item} />
                )
            })}
        </ul>
    )
}

const mapStateToProps = (state) => { // получаем из стора (редакс -конеект)
    return { 
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => { //записываем в стор с помощью фции  setMenuTStore
    return {
        setMenuToStore: (newState) => dispatch(menuLoaded(newState)),
        setLoading: () => dispatch(menuRequeted()),
        setError: () => dispatch(menuError())
    }
}
// const mapDispatchToProps = {
//     setMenuToStore: menuLoaded, //передаем простоназвание action-creator'a
//     setLoading: menuRequeted
//     setError: menuError
// }


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList)); // withResoServ  позваляет взять RestoServise из Реакт-контекста ./hoc