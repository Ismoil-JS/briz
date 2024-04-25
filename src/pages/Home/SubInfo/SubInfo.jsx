import React from 'react'
import c from "./Info.module.scss"
import { Link } from "react-router-dom"
import locationImage from "../../../assets/stols.jpg"
import amenity from "../../../assets/amenities.png"
import rooms from "../../../assets/room3.png"
import boats from '../../../assets/boats.jpg'

const SubInfo = () => {

  return (
    <div className={c.info_container}>
        <h3>Briz - bu mijozlar tanlovi!</h3>
        <div className={c.images}>
            <Link to={`/location`} className={c.image}>
                <img src={locationImage} alt='Location' />
                <p>Joylashuv</p>
            </Link>
            <Link to={`/amenities`} className={c.image}>
                <img src={amenity} alt='Amenities' />
                <p>Qulayliklar</p>
            </Link>
            <Link to={`/rooms`} className={c.image}>
                <img src={rooms} alt='Rooms' />
                <p>Xonalar</p>
            </Link>
            <Link to={`/gallery`} className={c.image}>
                <img src={boats} alt='Gallery' />
                <p>Galereya</p>
            </Link>
        </div>
    </div>
  )
}

export default SubInfo