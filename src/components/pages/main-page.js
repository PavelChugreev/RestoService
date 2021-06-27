import React from 'react';
import MenuList from '../menu-list';
import RestoServiceContext from '../resto-service-context';

const MainPage = () => {
    return (
        //способо без использования WithRestoService
        // <RestoServiceContext.Consumer> 
        //     {(RestoService) => <MenuList RestoService={RestoService}/>} 
        // </RestoServiceContext.Consumer>
        <MenuList/>
    )
}

export default MainPage;
