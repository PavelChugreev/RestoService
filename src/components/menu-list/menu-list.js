import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import MenuListItem from '../menu-list-item';
import { menuLoaded } from '../../actions';
import './menu-list.scss';


class MenuList extends Component {

    componentDidMount() {
        this.props.RestoService.getMenuItems()
            .then(res => this.props.setMenuToStore(res))

    }

    render() {
        const { menuItems } = this.props;

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
};

const mapStateToProps = (state) => { // получаем из стора (редакс -конеект)
    return { menuItems: state.menu }
}

const mapDispatchToProps = (dispatch) => { //записываем в стор с помощью фции  setMenuTStore
    return {
        setMenuToStore: (newState) => dispatch(menuLoaded(newState))
    }
}
// const mapDispatchToProps = {
//     setMenuToStore: menuLoaded //передаем простоназвание action-creator'a
// }


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList)); // withResoServ  позваляет взять RestoServise из Реакт-контекста ./hoc