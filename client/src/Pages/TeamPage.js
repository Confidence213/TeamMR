import React, { useEffect, useState } from 'react';
import Navbar from './../Components/NavBar';
import Footer from './../Components/Footer';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import LoaderComponent from '../Components/LoaderComponent';
import TeamTab from '../Components/TeamTab';

require("dotenv").config();

const CarsPage = () => {

    const [loading, setLoading] = useState(true);
    const [teamType, setTeam] = useState();
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
      
      setTeam(team);
      // team leads
      const resTopThree = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=true`);
      setTopThree(resTopThree);

      // subheads
      const manageHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Management`);
      const structHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Structures`);
      const transmHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Transmission`);
      const vehicleHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Vehicle`);
      const brakesHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Brakes`);
      const electHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Electronics`);
      const suspenHead = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=true&isAlumni=false&isTopThree=false&subsystem=Suspension`);
      
      setManageHead(manageHead.data[0]);
      setStructHead(structHead.data[0]);
      setTransmHead(transmHead.data[0]);
      setVehicleHead(vehicleHead.data[0]);
      setBrakesHead(brakesHead.data[0]);
      setElectHead(electHead.data[0]);
      setSuspenHead(suspenHead.data[0]);

      // team members
      const manageTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Management`);
      const structTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Structures`);
      const transmTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Transmission`);
      const vehicleTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Vehicle`);
      const brakesTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Brakes`);
      const electTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Electronics`);
      const suspenTeam = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/team/${team}/202122?isSubHead=false&isAlumni=false&isTopThree=false&subsystem=Suspension`);
      
      setStructTeam(structTeam.data);
      setManageTeam(manageTeam.data);
      setTransmTeam(transmTeam.data);
      setVehicleTeam(vehicleTeam.data);
      setBrakesTeam(brakesTeam.data);
      setElectTeam(electTeam.data);
      setSuspenTeam(suspenTeam.data);

      setLoading(false);
    }

    // descriptions for subsystems
    let mstruc = "Structures subsystem is responsible for designing and fabricating the Roll Cage for the car. Ensuring that the car is structurally strong enough to take on any terrain while ensuring the safety of the driver is our priority. We strive to build a chassis that works as a solid foundation for the other subsystems to work on.";
    let mtrans = "Transmission subsystem designs the gearbox and tunes the Continuously Variable transmission to work in tandem with the engine to transmit maximum torque to the wheels to achieve optimal propulsion of the car.  We do all this while minimizing power loss and maximizing efficiency."
    let msusp = "Suspension subsystem develops the links that connect the roll cage of the car to its wheels. We also design all the components within the wheel assembly. Together these parts make sure that the wheel is always in contact with the ground. This subsystem is also responsible for the manufacturing of the rack and pinion system that steers the car. The brakes subsystem designs a customised, efficient hydraulic braking system to improve the performance and safety of the ATV. They build and analyse the rotors, calipers and the brake pedal to make sure that the car delivers the stopping power the driver demands"
    let mmanag = "The management subsystem is responsible for a host of things ranging from managing the team’s social media presence to getting sponsorships, organising recruitments every season, managing logistics, managing the team’s website and countless other roles."
    let ebrakes = "The brakes subsystem designs a customised, efficient hydraulic braking system to improve the performance and safety of the ATV. They build and analyse the rotors, calipers, brake pads and the brake pedal along with undertaking research in brake bias, regenerative braking and cutting brakes. They are responsible for ensuring the car passes the brake check- a mandatory event in order to compete in the event. They are required to be on their toes at the event to bleed, service and tune the braking system before each race.";

    let estruc = "The Structures subsystem is responsible for the design and manufacturing of the chassis. They achieve a strong and ergonomic roll cage that ensures driver safety and comfort. They use industry preferred software for the crash test analysis, static, and dynamic load and stress testing. They must also strictly adhere to extensive rules set by the competition’s rulebook in order to pass the mandatory Technical Inspection. Chassis not only creates the platform that meshes all other subsystems together, they do so while maintaining the fine balance between optimal strength and weight of the vehicle"
    let etransm = "The transmission subsystem has the crucial role of designing an efficient E-powertrain and to maximise the powertrain output parameters by choosing the most suitable gear ratio. It works in close collaboration with the electronics subsystem so as to ensure a smooth integration between electrical and mechanical parameters. We do all this while minimizing power loss and maximizing efficiency.";
    let esusp = "Suspension subsystem makes sure that our Electric-ATV is able to effortlessly navigate the undulating and difficult terrain at the event. The task of tuning the springs and dampers, customisation of the steering system, designing and packaging of uprights, hubs, wheels and linkages, as well as their complex analysis on industry recognized simulation software, falls upon the suspension subsystem. Every year, the performance of the car is improved to provide better feedback and handling of the ATV" 
    let emanag = "The management subsystem is responsible for a host of things ranging from managing the team’s social media presence to getting sponsorships, organising recruitments every season, managing logistics, managing the team’s website and countless other roles."
    let eelec = "The Electronics subsystem is responsible for building a robust and safe E-powertrain. Soldering PCBs to crimping wires and analysing complex circuits they do it all. All of the preliminary testing is done on advanced simulation software so as to ensure the highest standards of safety while they make the wiring harness. Backed by rigorous research and development into new-age technologies while taking inspiration from the best industry practices with an aim to materialise a fully function Electric-ATV."

    let data = [
      { 
        name: "Structures",
        subHead: structHead,
        subTeam: structTeam,
        description: teamType === "ebaja" ? estruc : mstruc
      },  
      {
        name: "Transmission",
        subHead: transmHead,
        subTeam: transmTeam,
        description: teamType === "ebaja" ? etransm : mtrans
      },
      {
        name: "Suspension",
        subHead: suspenHead,
        subTeam: suspenTeam,
        description: teamType === "ebaja" ? esusp : msusp
      },
      {
        name: "Electronics",
        subHead: electHead,
        subTeam: electTeam,
        description: teamType === "ebaja" ? eelec : "" 
      },
      {
        name: "Vehicle Dynamics",
        subHead: vehicleHead,
        subTeam: vehicleTeam,
        description: teamType === "ebaja" ? "" : ""
      },
      {
        name: "Brakes",
        subHead: brakesHead,
        subTeam: brakesTeam,
        description: teamType === "ebaja" ? ebrakes : ""
      },
      {
        name: "Management",
        subHead: manageHead,
        subTeam: manageTeam,
        description: teamType === "ebaja" ? emanag : mmanag
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