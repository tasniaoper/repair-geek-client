import React from 'react';
import TopNavbar from '../../Shared/TopNavbar/TopNavbar';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <div>
            <TopNavbar/>
            <HeaderMain/>
            <About/>
        </div>
    );
};

export default Header;