import React, { useState } from 'react';
import c from './Header.module.scss';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom"
import { IoExit, IoMenu } from 'react-icons/io5';
import i18n from '../../language/i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const langs = ["uz 🇺🇿", "ru 🇷🇺"];
  const { t } = useTranslation();

  const handleMenu = () => {
    setMenu(!menu);
  };


  return (
    <header className={c.header}>
      <img src={logo} alt="Logo" className={c.logo} />

      <nav className={c.nav}>
        <ul className={c.navList}>
          <li><Link to={`/`}>{t("Headers.main")}</Link></li>
          <li><Link to={`/location`}>{t("Headers.location")}</Link></li>
          <li><Link to={`/amenities`}>{t("Headers.amenity")}</Link></li>
          <li><Link to={`/rooms`}>{t("Headers.rooms")}</Link></li>
          <li><Link to={`/price`}>{t("Headers.price")}</Link></li>
          <li><Link to={`/gallery`}>{t("Headers.gallery")}</Link></li>
          {langs.map((l) => (
            <>
              <li
                onClick={() => {
                  i18n.changeLanguage(l);
                  dispatch({ langCode: l, type: "CHANGE_LANG" })
                }}
              >
                {l.toUpperCase()}
              </li>
              <span className={c.lang_list_span}>|</span>
            </>
          ))}
        </ul>
      </nav>
      <IoMenu className={c.menu} onClick={handleMenu} />
      <div className={menu ? c.mobile_menu : c.menu_initial} >
        <div className={c.exit}>
          <IoExit className={c.mobile_menu_exit} onClick={handleMenu} />
        </div>
        <ul className={c.mobileNavList}>
          <li className={c.lang_mobile}>{langs.map((l) => (
            <p
              onClick={() => {
                i18n.changeLanguage(l);
                dispatch({ langCode: l, type: "CHANGE_LANG" })
              }}
            >
              {l.toUpperCase()}
            </p>
          ))}</li>
          <li onClick={handleMenu}><Link to={`/`}>{t("Headers.main")}</Link></li>
          <li onClick={handleMenu}><Link to={`/location`}>{t("Headers.location")}</Link></li>
          <li onClick={handleMenu}><Link to={`/amenities`}>{t("Headers.amenity")}</Link></li>
          <li onClick={handleMenu}><Link to={`/rooms`}>{t("Headers.rooms")}</Link></li>
          <li onClick={handleMenu}><Link to={`/price`}>{t("Headers.price")}</Link></li>
          <li onClick={handleMenu}><Link to={`/gallery`}>{t("Headers.gallery")}</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
