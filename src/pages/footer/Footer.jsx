import React from 'react'
import c from "./Footer.module.scss"
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {

    return (
        <div className={c.footer_container}>
            <div className={c.socials}>
                <a style={{ background: "rgb(60,89,151)" }} href="https://www.facebook.com/breezuzb">
                    <FaFacebook />
                </a>
                <a style={{ background: "rgb(192, 31, 31)" }} href="https://www.instagram.com/breezuzb/">
                    <FaInstagram />
                </a>
                <a style={{ background: "green" }} href="https://t.me/breezuzb">
                    <FaTelegram />
                </a>
            </div>

            <div className={c.location}>
                <p> <i> Briz dam olish maskani </i>  Location: Toshkent dengizi, O'rta Chirchiq, Tashkent
                    <a href="tel: +998-99-444-9959"> +998994449959 </a>
                    <a href="mailto: info@ubi.uz"> info@ubi.uz</a></p>
            </div>

            <div className={c.copyRight}>
                <p>CopyRight © 2024 by Briz. Proudly created with UBI Consulting</p>
            </div>
        </div>
    )
}

export default Footer