import React from 'react'
import MainCrosel from '../../component/HomeCarosel/MainCrosel';
import HomeSectionCarousel from '../../component/HomeSection/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';



const HomePage = () => {
    return (
        <div>
            <MainCrosel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
               <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
               <HomeSectionCarousel data={mens_kurta} sectionName={"Men's shirt"}/>
               <HomeSectionCarousel data={mens_kurta} sectionName={"Men's shoe"}/>
               <HomeSectionCarousel data={mens_kurta} sectionName={"Men's pent"}/>
            </div>
        </div>
    )
}

export default HomePage;