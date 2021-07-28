import React, { useEffect, useState } from 'react';
import Navbar from './../Components/NavBar';
import Footer from './../Components/Footer';
import CarCards from './../Components/CarCards';
import './../Styles/carStyles.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import LoaderComponent from '../Components/LoaderComponent';

const CarsPage = () => {

    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchData  () {
            const resCars = await axios.get('api/cars/');
            setCars(resCars.data);
            setLoading(false);
        }
        fetchData();
    }, []);

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
                <meta property="og:url" content='https://teammanipalracing.com/cars' />
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
                {
                    loading ? <div className='h-550'><LoaderComponent /></div> 
                    : 
                    <>
                        <div className='d-flex flex-wrap align-items-center justify-content-center' style={{ padding: '5rem 20%' }}>
                        <div className='car-card-back'></div>
                        <CarCards data={cars} />
                        </div>
                    </> 
                }
            <Footer/>
        </div>
    );
}

export default CarsPage;