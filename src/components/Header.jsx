import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <h1 className="header__icon">LOGO</h1>


            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
        </div>
    )
}

export default Header
