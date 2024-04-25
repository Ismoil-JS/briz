import React from 'react'
import c from './Price.module.scss'
import prices1 from '../../assets/prices1.png'
import prices2 from '../../assets/prices2.png'

const Pricing = () => {
  return (
    <div className={c.price_container} >
      <h3>Narxlar</h3>
      <p>Xona narxlari Toshkent dengizidagi Briz sayilgohining saytidagi barcha qulayliklar hisobga olgan holda belgilangan. 
        Narxlar bayram va dam olish kunlariga bog&apos;liq o&apos;zgarishi mumkin.</p>
        <img src={prices1} alt="Amenities" className={c.price1} />

      <h3 style={{marginTop: "30px"}}>Xizmatlar</h3>
        <img src={prices2} alt="Amenities" className={c.price1} />
    </div>
  )
}

export default Pricing