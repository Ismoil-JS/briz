import React from 'react' 
import c from './Banner.module.scss'
import banner from "../../../assets/banner2.jpg"
import basseyn from "../../../assets/basseyn2.jpg"
import natureRoom from "../../../assets/roomInNature.jpg"
import billiard from "../../../assets/billiard.jpg"
import stols from "../../../assets/stols.jpg"
import park from "../../../assets/park.jpg"
import stolAndSea from "../../../assets/naturalStol.jpg"
const Banner = () => {
    return (
        <div className={c.banner_container}>
            <img className={c.banner} src={banner} alt="banner" />
            <div className={c.info}>
                <h3>
                    Toshkent dengizi bilan tanishing & Sohildan bahramand boling
                </h3>
                <p>
                    Briz dam olish maskaniga xush kelibsiz, bu yerda siz tinch dam olishingiz, 
                    yangilanishingiz va o&apos;zingizni qayta kashf etishingiz mumkin. Go&apos;zal tabiat va 
                    har bir xonadan, basseyndan tortib dengizgacha ajoyib manzaralarni sizga 
                    Toshkent shahridan atigi 40km uzoqlikda sizga taklif qilamiz.
                </p>
                <p>
                Tongingizni Tuyabo&apos;g&apos;iz suv omborining toza havosi bilan qarshi oling. 
                Kunduzi siz bizning kater va qayiqlarimiz bilan dengizni kashf qilishingiz, 
                sohil bo&apos;ylab sayr qilishingiz, basseynda cho&apos;mishingiz yoki baliq ovlab zavq olishingiz mumkin. 
                Shuningdek, stol tennisi, billiard, raqs zali bilan restoran, sauna yoki kalyan sizni qiziqtirsa, bu maskan aynan siz uchun.
                Kechasi, o&apos;t o&apos;choqlari atrofida ajoyib quyosh botishini tomosha qilish yoki 
                suv bo&apos;yida sohilda o&apos;tirib, yulduzlarni tomosha qilishdan ko&apos;ra go&apos;zalroq manzarani qayta uchratmaysiz.
                Bolalar uchun maydoncha, o&apos;ynash uchun hona va kichik hayvonot bog&apos;i ham mavjud!
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