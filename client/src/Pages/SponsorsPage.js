import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import axios from 'axios';
import LoaderComponent from '../Components/LoaderComponent';
import { ChevronRight } from 'react-feather';
import AOS from 'aos';

const SponsorsPage = () => {

    const [loading, setLoading] = useState(true);
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
      async function fetchData  () {
        const resSponsor = await axios.get('api/sponsors/');
        setSponsors(resSponsor.data);
        setLoading(false);
      }
      AOS.init({
        // duration : 5000
      });
      fetchData();
    }, [])

    return (
        <div>
            <Helmet>
                <title>Sponsors | Team Manipal Racing</title>
                <meta name='description' content='Meet the sponsors that back Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv, sponsors'
                />
                <meta name='url' content='https://teammanipalracing.in/sponsors' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.in/sponsors" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Cars | Team Manipal Racing"
                />
                <meta
                  property="og:description"
                  content="Meet the sponsors that back Team Manipal Racing"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing.in/sponsors' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='Sposnors | Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content="Meet the sponsors that back Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className='d-flex flex-column position-relative' style={{ height:'40vh' }}>
                <NavBar />
                <div className='font-roboto text-white font-weight-bolder text-center mt-auto px-10 z-30' style={{ fontSize:'4.5vmax', letterSpacing:'0.3rem' }}>
                    Our Sponsors
                </div>
                <div className='z-10 position-absolute sponsors-banner'/></div>
                <div className='font-fira-sans text-white font-size-16 text-center w-md-half mx-auto' style={{ padding:'5rem 5rem' }}>
                    <p className='text-white'>
                        The work we do as a team is funded, supported and vouched for by our sponsors. They are the major support system that we fall back upon in times of need. 
                    </p>
                </div>
                {
                    loading ? <div className='h-550'><LoaderComponent /></div> 
                    : 
                    <>
                        <div className='container-fluid d-flex flex-wrap mx-auto justify-content-center my-20 px-20'>
                            {
                              sponsors.map((sponsor) => {
                                return (
                                  <div data-aos="flip-up" className="sponsor-card h-300 w-300 p-20 mx-5 my-5 rounded d-flex align-items-center justify-content-center">
                                    <img className="w-full" alt={sponsor.name} src={sponsor.src}></img>
                                  </div>
                                )
                              })
                            }
                            {/* sponsor us card */}
                            <div data-aos="fade-up" className="sponsor-us-card text-center h-300 w-300 p-20 mx-5 my-5 rounded d-flex flex-column align-items-center justify-content-center">
                                <p className="m-0 p-0 font-staatliches text-white" style={{ fontSize: "3rem", borderBottom: "5px solid white" }}>Find Us Interesting?</p>
                                <div className="d-flex flex-column">
                                  <div className="spon-button px-10 h-50 d-flex align-items-center justify-content-center my-10 text-white font-size-24 font-staatliches">
                                    <Link to="/#contact-us">
                                      <p className="p-0 m-0 text-white">Get In Touch</p>
                                    </Link>
                                    <ChevronRight className="p-0 my-auto" size={35}/>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </> 
                }
            <Footer/>
        </div>
    );
}

export default SponsorsPage;