import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
    return (
        <div className="header">
         
            <Link to="/" className="header__title"> REMARKABLE VACATIONS</Link>
         


            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>

            <div className="header__right">
                <p>Become a V.I.P</p>
                <StarBorderIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
