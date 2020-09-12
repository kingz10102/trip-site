import React from 'react';
import logopic from '../assets/sitelogo.png';
import SearchIcon from '@material-ui/icons/Search';

import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <img 
            className="header__icon"
            src={logopic}
            alt=""/>


            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Header
