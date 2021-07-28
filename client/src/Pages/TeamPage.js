import React, { useEffect, useState } from 'react';
import Navbar from './../Components/NavBar';
import Footer from './../Components/Footer';
import './../Styles/teamStyles.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import LoaderComponent from '../Components/LoaderComponent';

const CarsPage = () => {

    const [loading, setLoading] = useState(true);
    const [mbaja, setmbaja] = useState(true);
    const [ebaja, setebaja] = useState(false);

    useEffect(() => {
        async function fetchData  () {
          console.log(mbaja)
            const resCars = await axios.get(`../api/team/${mbaja ? 'mbaja' : 'ebaja'}/201920?isSubHead=false&isAlumni=false&isTopThree=true`);
            // setTeam(resCars.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    const fetchData = async () => {

      // team leads
      const resTopThree = await axios.get(`../api/team/mbaja/201920?isSubHead=false&isAlumni=false&isTopThree=true`);

      // subheads
      const manageHead = await axios.get(`../api/team/mbaja/201920?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Management`);
      const structHead = await axios.get(`../api/team/mbaja/201920?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Structures`);
      const transmHead = await axios.get(`../api/team/mbaja/201920?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Transmission`);
      const vehicleHead = await axios.get(`../api/team/mbaja/201920?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Vehicle`);
      const electHead = await axios.get(`../api/team/mbaja/201920?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Electronics`);

      // team members
      const manageTeam = await axios.get(`../api/team/mbaja/201920?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Management`);
      const structTeam = await axios.get(`../api/team/mbaja/201920?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Structures`);
      const transmTeam = await axios.get(`../api/team/mbaja/201920?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Transmission`);
      const vehicleTeam = await axios.get(`../api/team/mbaja/201920?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Vehicle`);
      const electTeam = await axios.get(`../api/team/mbaja/201920?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Electronics`);


      // setTeam(resCars.data);
      setLoading(false);
    }

    return (
        <div>
            <Helmet>
                <title>Team | Team Manipal Racing</title>
                <meta name='description' content='Meet the team behind Team Manipal Racing' />
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
                  content="Meet the team behind Team Manipal Racing"
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
                  content="Meet the team behind Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className='d-flex flex-column position-relative' style={{ height:'40vh' }}>
                <Navbar />
                <div className='font-staatliches text-white font-weight-bolder text-center mt-auto px-10 z-30' style={{ fontSize:'4.5vmax', letterSpacing:'0.3rem' }}>
                    MEET THE TEAM
                </div>
                <div className='z-10 position-absolute team-banner'/></div>
                {
                    loading ? <div className='h-550'><LoaderComponent /></div> 
                    : 
                    <>
                        <div className='d-flex justify-content-center my-20 w-md-half m-auto'>
                          
                        </div>
                        <div className=''>

                        </div>
                    </> 
                }
            <Footer/>
        </div>
    );
}

export default CarsPage;