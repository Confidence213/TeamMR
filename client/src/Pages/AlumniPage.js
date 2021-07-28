import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import Gallery from 'react-photo-gallery';
import './../Styles/alumniStyles.css';
import axios from 'axios';
import LoaderComponent from '../Components/LoaderComponent';

const AlumniPage = () => {

    const [loading, setLoading] = useState(true);

    return (
        <div>
            <Helmet>
                <title>Alumni | Team Manipal Racing</title>
                <meta name='description' content='Meet the illustrious alumni from Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv, alumni'
                />
                <meta name='url' content='https://teammanipalracing.com/alumni' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.com/alumni" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Alumni | Team Manipal Racing"
                />
                <meta
                  property="og:description"
                  content="Meet the illustrious alumni from Team Manipal Racing"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing.com/alumni' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='Alumni | Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content="Meet the illustrious alumni from Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className='d-flex flex-column position-relative' style={{ height:'40vh' }}>
                <NavBar />
                <div className='font-staatliches text-white font-weight-bolder text-center mt-auto px-10 z-30' style={{ fontSize:'4.5vmax', letterSpacing:'0.3rem' }}>
                    OUR ALUMNI
                </div>
                <div className='z-10 position-absolute alumni-banner'/></div>
                <div className='font-fira-sans text-white font-size-16 text-center w-md-half mx-auto' style={{ padding:'5rem 5rem' }}>
                    <p className='text-white'>
                        Team Manipal Racing has helped individulas grow while being part of our team. Our Alumni are now in top positions in their respective fields and we are proud of them.  
                    </p>
                </div>
                {
                    // loading ? <div className='h-550'><LoaderComponent /></div> 
                    // : 
                    <>
                        <div className='container-fluid mx-auto my-20 px-20'>

                        </div>
                    </> 
                }
            <Footer/>
        </div>
    );
}

export default AlumniPage;