import React from 'react' 
import { useTranslation } from 'react-i18next'
import c from './Banner.module.scss'
import banner from "../../../assets/banner2.jpg"
import basseyn from "../../../assets/basseyn2.jpg"
import natureRoom from "../../../assets/roomInNature.jpg"
import billiard from "../../../assets/billiard.jpg"
import stols from "../../../assets/stols.jpg"
import park from "../../../assets/park.jpg"
import stolAndSea from "../../../assets/naturalStol.jpg"
const Banner = () => {
    const {t} = useTranslation();
    return (
        <div className={c.banner_container}>
            <img className={c.banner} src={banner} alt="banner" />
            <div className={c.info}>
                <h3>
                {t("Main-banner.heading")}
                </h3>
                <p>
                {t("Main-banner.info-part1")}
                </p>
                <p>
                {t("Main-banner.info-part2")}
                </p>
            </div>
            <div className={c.info_images}>
                <img src={basseyn} alt='resorting area' className={c.image1} />
                <img src={natureRoom} alt='resorting area' className={c.image2} />
                <img src={stols} alt='resorting area' className={c.image3} />
                <img src={billiard} alt='resorting area' className={c.image4} />
                <img src={park} alt='resorting area' className={c.image5} />
                <img src={stolAndSea} alt='resorting area' className={c.image6} />
            </div>
        </div>
    )
}

export default Banner