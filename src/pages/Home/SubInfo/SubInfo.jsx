import React from 'react'
import { useTranslation } from 'react-i18next'
import c from "./Info.module.scss"
import { Link } from "react-router-dom"
import locationImage from "../../../assets/stols.jpg"
import amenity from "../../../assets/amenities.png"
import rooms from "../../../assets/room3.png"
import boats from '../../../assets/boats.jpg'

const SubInfo = () => {
    const {t} = useTranslation();

  return (
    <div className={c.info_container}>
        <h3>{t("Main-info.heading")}</h3>
        <div className={c.images}>
            <Link to={`/location`} className={c.image}>
                <img src={locationImage} alt='Location' />
                <p>{t("Main-info.location")}</p>
            </Link>
            <Link to={`/amenities`} className={c.image}>
                <img src={amenity} alt='Amenities' />
                <p>{t("Main-info.amenity")}</p>
            </Link>
            <Link to={`/rooms`} className={c.image}>
                <img src={rooms} alt='Rooms' />
                <p>{t("Main-info.rooms")}</p>
            </Link>
            <Link to={`/gallery`} className={c.image}>
                <img src={boats} alt='Gallery' />
                <p>{t("Main-info.gallery")}</p>
            </Link>
        </div>
    </div>
  )
}

export default SubInfo