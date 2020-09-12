import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <img 
            className="header__icon"
            src="https://icon-library.net/images/vacation-icon-png/vacation-icon-png-7.jpg"
            alt=""/>


            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Header
