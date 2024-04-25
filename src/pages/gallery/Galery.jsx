import React from 'react'
import c from './Gallery.module.scss'
import image1 from '../../assets/naturalStol.jpg'
import image2 from '../../assets/piknik.jpg'
import image3 from '../../assets/amenitiesBanner.jpg'
import image4 from '../../assets/boatRacing.jpg'
import image5 from '../../assets/restaurant.jpg'
import image6 from '../../assets/sunset.jpg'
import image7 from '../../assets/park.jpg'
import image8 from '../../assets/basseyn2.jpg'
import image9 from '../../assets/roomInNature.jpg'
import image10 from '../../assets/trees.jpg'
import image11 from '../../assets/stols.jpg'
import image12 from '../../assets/sec-floor.jpg'
import image13 from '../../assets/fishing.jpg'
import image14 from '../../assets/amenitiesBanner.jpg'
import image15 from '../../assets/stolview.jpg'
import image16 from '../../assets/grapeView.jpg'
import image17 from '../../assets/autumn.jpg'
import image18 from '../../assets/tree-flower.jpg'
import image19 from '../../assets/fish-food.jpg'
import image20 from '../../assets/flowers.jpg'


const Galery = () => {
  return (
    <div className={c.gallery}>
      <div className={c.images}>
        <img src={image1} alt="Resort gallery" className={c.image1} />
        <img src={image2} alt="Resort gallery" className={c.image2} />
        <img src={image3} alt="Resort gallery" className={c.image3} />
        <img src={image4} alt="Resort gallery" className={c.image4} />
        <img src={image5} alt="Resort gallery" className={c.image5} />
        <img src={image6} alt="Resort gallery" className={c.image6} />
        <img src={image7} alt="Resort gallery" className={c.image7} />
        <img src={image8} alt="Resort gallery" className={c.image8} />
        <img src={image9} alt="Resort gallery" className={c.image9} />
        <img src={image10} alt="Resort gallery" className={c.image10} />
        <img src={image11} alt="Resort gallery" className={c.image11} />
        <img src={image12} alt="Resort gallery" className={c.image12} />
        <img src={image13} alt="Resort gallery" className={c.image13} />
        <img src={image14} alt="Resort gallery" className={c.image14} />
        <img src={image15} alt="Resort gallery" className={c.image15} />
        <img src={image16} alt="Resort gallery" className={c.image16} />  
        <img src={image17} alt="Resort gallery" className={c.image17} />
        <img src={image18} alt="Resort gallery" className={c.image18} />
        <img src={image19} alt="Resort gallery" className={c.image19} />
        <img src={image20} alt="Resort gallery" className={c.image20} />
      </div>
    </div>
  )
}

export default Galery


