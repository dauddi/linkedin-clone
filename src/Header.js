import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import './HeaderOption'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function header() {
    return (
        <div className="header">

            <div className="header__left">
                {/* logo */}
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linkedin logo" />
                {/* searchbar */}
                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon = {HomeIcon} title = 'Home' />
                <HeaderOption Icon = {SupervisorAccountIcon} title = 'My Network' />
                <HeaderOption Icon = {BusinessCenterIcon} title = 'Jobs' />
                <HeaderOption Icon = {ChatIcon} title = 'Messaging' />
                <HeaderOption Icon = {NotificationsIcon} title = 'Notifications' />
                <HeaderOption avatar = "https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg" title = 'Me' />
            </div>
        </div>
    )
}

export default header
