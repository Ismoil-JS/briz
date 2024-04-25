import React, { useState } from 'react';
import c from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom"
import { IoExit, IoMenu } from 'react-icons/io5';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  

  return (
    <header className={c.header}>
      <img src={logo} alt="Logo" className={c.logo} />
      <select className={c.language_changer}  >
        <option value="uz">UZ</option>
        <option value="ru">RU</option>
      </select>

      <nav className={c.nav}>
        <ul className={c.navList}>
          <li><Link to={`/`}>Asosiy</Link></li>
          <li><Link to={`/location`}>Joylashuv</Link></li> 
          <li><Link to={`/amenities`}>Qulayliklar</Link></li>
          <li><Link to={`/rooms`}>Xonalar</Link></li>
          <li><Link to={`/price`}>Narxlar</Link></li>
          <li><Link to={`/gallery`}>Galereya</Link></li>
        </ul>
      </nav>
      <IoMenu className={c.menu} onClick={handleMenu} />
      <div className={menu ? c.mobile_menu : c.menu_initial} >
        <div className={c.exit}>
          <IoExit className={c.mobile_menu_exit} onClick={handleMenu} /> 
        </div>
        <ul className={c.mobileNavList}>
          <li onClick={handleMenu}><Link to={`/`}>Asosiy</Link></li>
          <li onClick={handleMenu}><Link to={`/location`}>Joylashuv</Link></li>
          <li onClick={handleMenu}><Link to={`/amenities`}>Qulayliklar</Link></li>
          <li onClick={handleMenu}><Link to={`/rooms`}>Xonalar</Link></li>
          <li onClick={handleMenu}><Link to={`/price`}>Narxlar va buyurtma berish</Link></li>
          <li onClick={handleMenu}><Link to={`/gallery`}>Galereya</Link></li>
        </ul>
      </div>
    </header> 
  );
};

export default Header;
