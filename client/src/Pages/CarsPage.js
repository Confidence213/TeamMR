import React from 'react';
import Navbar from './../Components/NavBar';
import Footer from './../Components/Footer';
import CarCards from './../Components/CarCards';
import './../Styles/carStyles.css';
import { Helmet } from 'react-helmet';

const CarsPage = () => {

    const data = [
        {
            version:'VERSION 1',
            image:'https://live.staticflickr.com/65535/51259439950_b94df7d601.jpg',
            versionNo:'1'
        },
        {
            version:'VERSION 2',
            image:'https://live.staticflickr.com/65535/51259439620_86d3b4e5dc.jpg',
            versionNo:'2'
        },
        {
            version:'VERSION 3',
            image:'https://live.staticflickr.com/65535/51259439965_352a774018.jpg',
            versionNo:'3'
        },
        {
            version:'VERSION 4',
            image:'https://live.staticflickr.com/65535/51259439965_352a774018.jpg',
            versionNo:'4'
        },
        {
            version:'VERSION 5',
            image:'https://live.staticflickr.com/65535/51258599493_9735ee4b82.jpg',
            versionNo:'5'
        },
        {
            version:'VERSION 6',
            image:'https://live.staticflickr.com/65535/51257670597_9685266f15.jpg',
            versionNo:'6'
        },
        {
            version:'VERSION 7',
            image:'https://live.staticflickr.com/65535/51259439940_264d7685f4.jpg',
            versionNo:'7'
        },
        {
            version:'VERSION 8',
            image:'https://live.staticflickr.com/65535/51259439910_3e4e5bd0e8.jpg',
            versionNo:'8'
        },
        {
            version:'VERSION 9',
            image:'https://live.staticflickr.com/65535/51258599623_cc05f5801f.jpg',
            versionNo:'9'
        },
        {
            version:'VERSION 10',
            image:'https://live.staticflickr.com/65535/51258351831_48d1f7e3b3.jpg',
            versionNo:'10'
        }
    ]

    return (
        <div>
            <Helmet>
                <title>Cars | Team Manipal Racing</title>
                <meta name='description' content='All the cars ever fabricated by Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content='https://teammanipalracing.com/cars' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.com/cars" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Cars | Team Manipal Racing"
                />
                <meta
                  property="og:description"
                  content="All the cars ever fabricated by Team Manipal Racing"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing/cars' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='Cars | Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content="All the cars ever fabricated by Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className='d-flex flex-column position-relative' style={{ height:'40vh' }}>
                <Navbar />
                <div className='font-staatliches text-white font-weight-bolder text-center mt-auto px-10 z-30' style={{ fontSize:'4.5vmax', letterSpacing:'0.3rem' }}>
                    OUR CARS, OUR PRIDE
                </div>
                <div className='z-10 position-absolute car-banner' style={{ width:'100vw', height:'40vh', left:'0', top:'0', filter:'brightness(40%)' }}/></div>
                <div className='d-flex flex-wrap align-items-center justify-content-center' style={{ padding: '5rem 20%' }}>
                <div className='car-card-back'></div>
                <CarCards data={data}/>
            </div>
            <Footer/>
        </div>
    );
}

export default CarsPage;