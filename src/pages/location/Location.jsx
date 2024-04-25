import React from 'react'
import c from './location.module.scss'
import sea from '../../assets/bigSea.jpg'
import nature1 from '../../assets/brizNature.jpg'
import nature2 from '../../assets/boats.jpg'
import nature3 from '../../assets/trees.jpg'
import nature4 from '../../assets/roomInNature.jpg'
import locationImg from "../../assets/location.png"

const Location = () => {

  return (
    <div className={c.location_container}>
      <img src={sea} alt="Location" className={c.banner} />
      <div className={c.location_info}>
        <h3>Siz uchun Toyabo&apos;g&apos;iz suv omborida ajoyib joylashuv</h3>
        <p>Bizning kurortimiz 1.5 gektar maydonda etuk soyali daraxtlar, yam-yashil maysazorlar,
          bog&apos;lar va Toshkent dengizi bo&apos;ylab kottejlar va ochiq havodagi so&apos;rilarimiz bilan o&apos;ralgan.
          Bizning tabiiy muhitimiz osoyishtaligidan bahramand bo&apos;ling yoki Toyabo&apos;g&apos;in suv ombori mintaqasidagi
          eng go&apos;zal maskanlardan birida, Brizda sohil qirg&apos;og&apos;i bo&apos;ylab sayr qiling, baliq ovlang yoki shunchaki
          manzaradan zavqlaning.</p>
      </div> 
      <div className={c.location_images}>
        <img src={nature1} alt='resorting area' />
        <img src={nature2} alt='resorting area' />
        <img src={nature3} alt='resorting area' />
        <img src={nature4} alt='resorting area' />
      </div>
      <div className={c.location_text}>
        <p>Toshkent dengizidagi hududdagi ajoyib Briz dam olish maskani sifatida biz 21 yildan ortiq vaqt davomida
          eng yaxshi sayyohlik maskanlaridan biri sifatida tan olingan Briz saylgohi
          shahar markazidan bir necha daqiqa uzoqlikda. Noyob manzaralar, chandan toza musaffo havo,
          restoranlari va mahalliy joylashuvi bilan bu mijozlarni O&apos;zbekistonnning eng yaxshi so&apos;lim maskaniga chorlaydi.</p>

        <p>Albatta, biz ochiq havoda zavqlanish uchun eng yaxshi joyda joylashganmiz! Briz saylgohi
        &quot;O&apos;zbekistonning eng yaxshi plyajlaridan biri&quot; deb nomlanganini aytishdan faxrlanamiz
          va bu mintaqadagi oltita ajoyib jamoat plyajlaridan biri ekanligini aytishdan faxrlanamiz.
          Shuningdek, siz qayiqda sayohat qilishingiz, baliq ovi bilan shug&quot;ullanishingiz yoki
          kun davomida tabiatni o&apos;rganishingiz mumkin.</p>

        <p>Bajarish uchun juda ko&apos;p mashg&apos;ulot borki, bir marta tashrif etarli bo&apos;lmasligi mumkin - shuning uchun mehmonlarimiz yildan-yilga ko&apos;payib bormoqda.</p>
      </div>

      <div className={c.location_map}>
        <a target='blank' href="https://www.google.com/maps/place/40%C2%B058'30.4%22N+69%C2%B019'37.9%22E/@41.1632487,69.3029425,9.47z/data=!4m4!3m3!8m2!3d40.975123!4d69.327205?entry=ttu">
          <img src={locationImg} alt="Location" className={c.location_url} />
        </a>
        <div className={c.text_map}>
          <h3 className={c.map_header}>Tashrif buyurish</h3>
          <p>Tashvishlaringizni ortda qoldirganingizni his qilish uchun uzoqqa sayohat qilishingiz shart emas.
            Biz bir necha yirik shaharlardan atigi yarim kunlik masofada joylashganmiz.</p>

          <ul>
            <li>Toshkentdan 1.5 soat</li>
            <li>Chirchiqdan 1.5 soat</li>
            <li>Ohangarondan 1 soat</li>
            <li>Vodiydan 4 soat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Location