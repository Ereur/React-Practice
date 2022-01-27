import React from 'react';
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className='header'> 
        <img 
            className="header__logo"
            src="./logo.png"
        />

        <div className="header__search">
            <input
                className="header__searchInput"
                type="text" />
            <SearchIcon className="header__searchIcon"/>
        </div>
        <div className="header__nav">
            <div className="header__option">
                <span className='header__optionLign1'>
                    Hello Anas
                </span>
                <span className='header__optionLign2'>
                     Sign in</span>
            </div>
            <div className="header__options">
                 <span className='header__optionLign1'>
                    Returns
                 </span>
                 <span className='header__optionLign2'>
                    &orders
                 </span>
            </div>
            <div className="header__options">
                 <span className='header__optionLign1'>
                    Your
                 </span>
                 <span className='header__optionLign2'>
                    Prime
                 </span>
            </div>
        </div>
    </div>
    
    );
}

export default Header;