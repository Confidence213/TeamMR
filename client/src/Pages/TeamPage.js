import React, { useEffect, useState } from 'react';
import Navbar from './../Components/NavBar';
import Footer from './../Components/Footer';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import LoaderComponent from '../Components/LoaderComponent';
import TeamTab from '../Components/TeamTab';

const CarsPage = () => {

    const [loading, setLoading] = useState(true);

    const [topThree, setTopThree] = useState();

    // team data state
    const [manageHead, setManageHead] = useState();
    const [structHead, setStructHead] = useState();
    const [transmHead, setTransmHead] = useState();
    const [vehicleHead, setVehicleHead] = useState();
    const [brakesHead, setBrakesHead] = useState();
    const [electHead, setElectHead] = useState();
    const [suspenHead, setSuspenHead] = useState();

    const [manageTeam, setManageTeam] = useState();
    const [structTeam, setStructTeam] = useState();
    const [transmTeam, setTransmTeam] = useState();
    const [vehicleTeam, setVehicleTeam] = useState();
    const [brakesTeam, setBrakesTeam] = useState();
    const [electTeam, setElectTeam] = useState();
    const [suspenTeam, setSuspenTeam] = useState();

    useEffect(() => {
        fetchData("mbaja");
    }, []);

    const fetchData = async (team) => {

      // team leads
      const resTopThree = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=true`);
      setTopThree(resTopThree);

      // subheads
      const manageHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Management`);
      const structHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Structures`);
      const transmHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Transmission`);
      const vehicleHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Vehicle`);
      const brakesHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Brakes`);
      const electHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Electronics`);
      const suspenHead = await axios.get(`../api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Suspension`);
      
      setManageHead(manageHead.data[0]);
      setStructHead(structHead.data[0]);
      setTransmHead(transmHead.data[0]);
      setVehicleHead(vehicleHead.data[0]);
      setBrakesHead(brakesHead.data[0]);
      setElectHead(electHead.data[0]);
      setSuspenHead(suspenHead.data[0]);

      // team members
      const manageTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Management`);
      const structTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Structures`);
      const transmTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Transmission`);
      const vehicleTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Vehicle`);
      const brakesTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Brakes`);
      const electTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Electronics`);
      const suspenTeam = await axios.get(`../api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Suspension`);
      
      setStructTeam(structTeam.data);
      setManageTeam(manageTeam.data);
      setTransmTeam(transmTeam.data);
      setVehicleTeam(vehicleTeam.data);
      setBrakesTeam(brakesTeam.data);
      setElectTeam(electTeam.data);
      setSuspenTeam(suspenTeam.data);

      setLoading(false);
    }

    let data = [
      { 
        name: "Structures",
        subHead: structHead,
        subTeam: structTeam
      },
      {
        name: "Electronics",
        subHead: electHead,
        subTeam: electTeam 
      },  
      {
        name: "Transmission",
        subHead: transmHead,
        subTeam: transmTeam
      },
      {
        name: "Suspension",
        subHead: suspenHead,
        subTeam: suspenTeam
      },
      {
        name: "Vehicle Dynamics",
        subHead: vehicleHead,
        subTeam: vehicleTeam
      },
      {
        name: "Brakes",
        subHead: brakesHead,
        subTeam: brakesTeam
      },
      {
        name: "Management",
        subHead: manageHead,
        subTeam: manageTeam
      }
    ];

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
                <meta name='url' content='https://teammanipalracing.in/cars' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.in/cars" />
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
                <meta property="og:url" content='https://teammanipalracing.in/cars' />
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
                <div className='font-roboto text-white font-weight-bolder text-center mt-auto px-10 z-30' style={{ fontSize:'4.5vmax', letterSpacing:'0.3rem' }}>
                    Meet The Team
                </div>
                <div className='z-10 position-absolute team-banner'/></div>
                {
                    loading ? <div className='h-550'><LoaderComponent /></div> 
                    : 
                    <>
                      <div className='d-flex justify-content-center my-20 w-md-three-quarter m-auto'>
                        <TeamTab 
                          subs={data}
                          topThree={topThree.data}
                          fetchData={fetchData}
                        />
                      </div>
                    </> 
                }
            <Footer/>
        </div>
    );
}

export default CarsPage;