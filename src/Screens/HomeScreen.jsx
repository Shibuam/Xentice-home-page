import React from 'react'
import Banner from '../Components/Homepage/Banner'
import BannerTwo from '../Components/Homepage/BannerTwo'
import CommercialBuilding from '../Components/Homepage/Building'
import CommercialShop from '../Components/Homepage/CommercialShop'
import {HeaderComponent} from '../Components/Homepage/HeaderComponent'
import Jobs from '../Components/Homepage/Jobs'
import CommercialLand from '../Components/Homepage/Land'
import CommercialOffice from '../Components/Homepage/Office'
import { HeaderTwo } from '../Components/Homepage/SecondHeader'

const HomeScreen = () => {
  return (
    <div>
        <HeaderComponent/>
        <HeaderTwo/>
        <Banner/>
        <Jobs/>
        <BannerTwo/>
        <CommercialShop/>
        <CommercialOffice/>
        <CommercialLand/>
        <CommercialBuilding/>
       
    </div>
  )
}

export default HomeScreen