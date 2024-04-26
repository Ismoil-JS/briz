import React from 'react'
import { useTranslation } from 'react-i18next'
import c from './Price.module.scss'
import prices1 from '../../assets/prices1.png'
import prices2 from '../../assets/prices2.png'

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className={c.price_container} >
      <h3>{t("Pricing.heading")}</h3>
      <p>{t("Pricing.info")}</p>
        <img src={prices1} alt="Amenities" className={c.price1} />

      <h3 style={{marginTop: "30px"}}>{t("Pricing.service")}</h3>
        <img src={prices2} alt="Amenities" className={c.price1} />
    </div>
  )
}

export default Pricing