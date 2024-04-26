import React from 'react'
import { useTranslation } from 'react-i18next'
import c from './Amenities.module.scss'
import amenityBanner from '../../assets/amenitiesBanner.jpg'
import basseyn from '../../assets/basseyn2.jpg'
import sunset from '../../assets/sunset.jpg'
import fishing from '../../assets/fishing.jpg'
import racing from '../../assets/boatRacing.jpg'

const Amenities = () => {
  const {t} = useTranslation();

  return (
    <div className={c.amenities_container}>
      <img src={amenityBanner} alt="Location" className={c.banner} />
      <div className={c.amenity_info}>
        <h3>{t("Amenity.heading")}</h3>
        <p>
        {t("Amenity.info-part1")}
        </p>
      </div>
      <div className={c.amenity_pics}>
        <div className={c.single_pic}>
          <img src={sunset} alt="Sunset" className={c.imaging} />
          <h4>{t("Amenity.sunset")}</h4>
          <p>{t("Amenity.sunset-info")}</p>
        </div>
        <div className={c.single_pic}>
          <img src={racing} alt="Boats" className={c.imaging} />
          <h4>{t("Amenity.swimming")}</h4>
          <p>{t("Amenity.swimming-info")}</p>
        </div>
        <div className={c.single_pic}>
          <img src={fishing} alt="Fishing" className={c.imaging} />
          <h4>{t("Amenity.fishing")}</h4>
          <p>{t("Amenity.fishing-info")}</p>
        </div>
        <div className={c.single_pic}>
          <img src={basseyn} alt="Basseyn" className={c.imaging} />
          <h4>{t("Amenity.basseyn")}</h4>
          <p>{t("Amenity.basseyn-info")}</p>
        </div>
      </div>
      <div className={c.amenity_text}>
        <h3>{t("Amenity.subheading")}</h3>
        <div className={c.list}>
        <ul className={c.right}>
          <li>{t("Amenity.basketball")}</li>
          <li>{t("Amenity.valeyball")}</li>
          <li>{t("Amenity.fishingnext")}</li>
          <li>{t("Amenity.tabletennis")}</li>
          <li>{t("Amenity.pioneerball")}</li>
          <li>{t("Amenity.billiard")}</li>
        </ul>
        <ul className={c.left}>
          <li>{t("Amenity.basseynnext")}</li>
          <li>{t("Amenity.food")}</li>
          <li>{t("Amenity.sauna")}</li>
          <li>{t("Amenity.playstation")}</li>
          <li>{t("Amenity.boatswimming")}</li>
          <li>{t("Amenity.katerswimming")}</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Amenities