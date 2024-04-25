import React from 'react'
import c from './Amenities.module.scss'
import amenityBanner from '../../assets/amenitiesBanner.jpg'
import basseyn from '../../assets/basseyn2.jpg'
import sunset from '../../assets/sunset.jpg'
import fishing from '../../assets/fishing.jpg'
import racing from '../../assets/boatRacing.jpg'

const Amenities = () => {
  return (
    <div className={c.amenities_container}>
      <img src={amenityBanner} alt="Location" className={c.banner} />
      <div className={c.amenity_info}>
        <h3>Bizniki - bu Sizniki</h3>
        <p>
          Ba&apos;zi mehmonlarimiz uchun kun bo&apos;yi ko&apos;lga qarashdan ko&apos;ra yaxshiroq yo&apos;l yo&apos;q.
          Boshqalar uchun ideal kun ular doimo harakatda bo&apos;ladigan kundir. Qaysi yo&apos;lni tanlashingizdan qat&apos;iy nazar,
          biz sizning mukammal hordiq chiqarishingizni ta&apos;minlash uchun yaxshi qulayliklarga egamiz.
        </p>
      </div>
      <div className={c.amenity_pics}>
        <div className={c.single_pic}>
          <img src={sunset} alt="Sunset" className={c.imaging} />
          <h4>Go&apos;zal quyosh botishi</h4>
          <p>Bu yerdan uzoq tog&apos;lar ostida quyoshning chiroyli tarzda cho&apos;kib ketishini tomosha qilishingiz mumkin, uning ranglari sokin suvlarda chiroyli aks etadi.</p>
        </div>
        <div className={c.single_pic}>
          <img src={racing} alt="Boats" className={c.imaging} />
          <h4>Qayiqda suzish</h4>
          <p>O&apos;zizngizni ko&apos;l bag&apos;riga topshirib biz taklif qilgan qayiqlarda kuningizni maroqli o&apos;tkazing va bir umrlik go&apos;zal hotiralarni o&apos;zingiz uchun yarating.</p>
        </div>
        <div className={c.single_pic}>
          <img src={fishing} alt="Fishing" className={c.imaging} />
          <h4>Baliq ovi</h4>
          <p>Baliq ovi bilan asablaringizni tinchlantirishingiz va tabiatdan bahra olishingiz sog&apos;ligingiz uchun juda foydali bo&apos;ladi. Baliq ovi uchun asboblarni esa biz sizga beramiz.</p>
        </div>
        <div className={c.single_pic}>
          <img src={basseyn} alt="Basseyn" className={c.imaging} />
          <h4>Doimiy basseyn</h4>
          <p>Cho&apos;milishni hohlaysizmi? Qaysi vaqt ekanligi muhim emas! Biz sizga 24/7 basseynni taklif etamiz. Hohlasangiz ko&apos;lda ham cho&apos;milishingiz mumkin.</p>
        </div>
      </div>
      <div className={c.amenity_text}>
        <h3>Qulayliklar</h3>
        <div className={c.list}>
        <ul className={c.right}>
          <li>Basketbol maydoni</li>
          <li>Valeybol maydoni</li>
          <li>Baliq ovlash</li>
          <li>Stol tennisi</li>
          <li>Pioneerbal</li>
          <li>Billiard</li>
        </ul>
        <ul className={c.left}>
          <li>Basseynda suzish</li>
          <li>3 mahal ovqat</li>
          <li>Shinam sauna</li>
          <li>Playstation</li>
          <li>Qayiqda suzish</li>
          <li>Katerda suzish</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Amenities