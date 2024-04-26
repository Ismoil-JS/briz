import React from 'react'
import c from './location.module.scss'
import sea from '../../assets/bigSea.jpg'
import nature1 from '../../assets/brizNature.jpg'
import nature2 from '../../assets/boats.jpg'
import nature3 from '../../assets/trees.jpg'
import nature4 from '../../assets/roomInNature.jpg'
import locationImg from "../../assets/location.png"
import { useTranslation } from 'react-i18next'

const Location = () => {
  const { t } = useTranslation();
  return (
    <div className={c.location_container}>
      <img src={sea} alt="Location" className={c.banner} />
      <div className={c.location_info}>
        <h3>{t("Location.heading")}</h3>
        <p>{t("Location.info-part1")}</p>
      </div> 
      <div className={c.location_images}>
        <img src={nature1} alt='resorting area' />
        <img src={nature2} alt='resorting area' />
        <img src={nature3} alt='resorting area' />
        <img src={nature4} alt='resorting area' />
      </div>
      <div className={c.location_text}>
        <p>{t("Location.info-part2")}</p>

        <p>{t("Location.info-part3")}</p>

        <p>{t("Location.info-part4")}</p>
      </div>

      <div className={c.location_map}>
        <a target='blank' href="https://www.google.com/maps/place/40%C2%B058'30.4%22N+69%C2%B019'37.9%22E/@41.1632487,69.3029425,9.47z/data=!4m4!3m3!8m2!3d40.975123!4d69.327205?entry=ttu">
          <img src={locationImg} alt="Location" className={c.location_url} />
        </a>
        <div className={c.text_map}>
          <h3 className={c.map_header}>{t("Location.map-header")}</h3>
          <p>{t("Location.map-info")}</p>

          <ul>
            <li>{t("Location.map1")}</li>
            <li>{t("Location.map2")}</li>
            <li>{t("Location.map3")}</li>
            <li>{t("Location.map4")}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Location