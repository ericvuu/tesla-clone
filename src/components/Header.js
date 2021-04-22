import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'


const Header = ({isMenuOpen, setIsMenuOpen}) => {

  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt='Tesla Logo'/>
      </div>

      <div className="header__center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panel</p>
      </div>

      <div className="header__right">
        <p className={isMenuOpen && 'header__link--hidden'}>Shop</p>
        <p className={isMenuOpen && 'header__link--hidden'}>Tesla Account</p>
        <div className="header__menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon/> : <MenuIcon/>}
        </div>
      </div>
    </div>
  )
}

export default Header
