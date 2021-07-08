import React, { useEffect } from 'react';
import Page from '../page';

const ItemPage = ({match}) => {

    return (
        <div className="cart"> 
            <Page match={match}/>
        </div>
    )
}

export default ItemPage;