import React from 'react';
import PortfolioComponent from '../PortfolioComponent/PortfolioComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import MenuComponent from '../MenuComponent/MenuComponent';

const ContainerComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <MenuComponent />
            <PortfolioComponent />
            <FooterComponent />
        </div>  
    )
}
export default ContainerComponent;