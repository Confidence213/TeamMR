import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import NavBar from './../Components/NavBar';
import LoaderComponent from '../Components/LoaderComponent';
import Footer from '../Components/Footer';

require("dotenv").config();

const CarsDetailPage = () => {

    const { version } = useParams(); 

    // creates a clean title from the parameter
    const cleanVersion = () => {
        let cleanVersion = version.split('');
        cleanVersion[0] = cleanVersion[0].toUpperCase();
        cleanVersion.splice(7,1);
        return cleanVersion.join('');
    }

    const [loading, setLoading] = useState(true);
    const [car, setCar] = useState();

    useEffect(() => {
        async function fetchData  () {
            const resCar = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/cars/${version.split('-')[version.split('-').length-1]}`);            
            setCar(resCar.data[0]);
            setLoading(false);
        }
        fetchData();
    }, [version]);

    return (
        <div>
            <Helmet>
                <title> {cleanVersion()} | Team Manipal Racing</title>
                <meta name='description' content='All the cars ever fabricated by Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content={`https://teammanipalracing.in/cars/${version}`} />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href={`https://teammanipalracing.in/cars/${version}`} />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content={`${cleanVersion()} | Team Manipal Racing`}
                />                
                <meta
                  property="og:description"
                  content={`${cleanVersion()} created by Team Manipal Racing`}
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content={`https://teammanipalracing.in/cars/${version}`} />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content={`${cleanVersion()} | Team Manipal Racing`}
                />
                <meta
                  name="twitter:description"
                  content={`${cleanVersion()} created by Team Manipal Racing`}
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className='h-50'>
              <NavBar />
            </div>
            {
                loading ? <div className='h-550'><LoaderComponent /></div> 
                : 
                <>
                  <div className='d-flex flex-column justify-content-center align-items-center m-0 p-0'>
                    <div className='d-flex flex-column align-items-center text-white' style={{ letterSpacing: '0.3rem', lineHeight: '1' }}>
                        <div className='font-staatliches d-md-none' style={{ fontSize: '5vmax' }}>VERSION {car.version}</div>
                        <div className='font-fira-sans d-md-none font-weight-light' style={{ fontSize: '3vmax' }}>{car.weight} KG</div>
                    </div>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <Link to='/cars'><button className="btn bg-transparent font-size-16 font-fira-sans w-auto m-20 d-none d-md-block" style={{ color: '#ec7b4d', borderColor: '#ec7b4d', letterSpacing: '0.1rem' }} type="button">Back</button></Link>
                        <hr className='d-none d-md-block' style={{ background: "#ec7b4d", width: '75vw', height: '0.1rem' }} />
                    </div>
                    <div className='d-flex flex-column flex-md-row align-items-center' style={{ minHeight: '70vh' }}>
                        <div className='d-flex flex-column order-2 order-md-1 text-white'>
                            <div className='font-staatliches d-flex flex-row mx-20 my-0 py-0' style={{ letterSpacing: '0.3rem' }}>
                                <div className='p-0 m-0 d-none d-md-block' style={{ fontSize: '5vmax' }}>VERSION {car.version}</div>
                                <div className='d-none d-md-block gradient-text' style={{ fontSize: '2.5vmax', padding: '2.5vmax' }}>{car.weight} KG</div>
                            </div>
                            <div className="row text-white font-fira-sans order-2 mx-20 my-0 py-0" style={{ letterSpacing: '0.3rem' }}>
                                <div className="col-md-6">
                                    <div className='d-flex flex-column m-20 align-items-center text-center text-md-left align-items-md-start'>
                                        <div className='font-staatliches font-size-22 mb-5' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Chassis</div>
                                        <div className='font-fira-sans font-size-16 font-weight-light'>{car.chassis}</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='d-flex flex-column m-20 align-items-center text-center text-md-left align-items-md-start'>
                                        <div className='font-staatliches font-size-22 mb-5' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Dampers</div>
                                        <div className='font-fira-sans font-size-16 font-weight-light'>{car.dampers}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='font-staatliches driver-card row justify-content-center justify-content-md-start order-1 order-md-2 justify-content-start align-items-center mx-0 mb-20 px-0' style={{ letterSpacing: '0.3rem' }}>
                                <img src={car.driver.image} alt={car.driver.name} className='w-150' style={{ borderRadius: '50%', padding: '0.4vmin', border: '0.4vmin solid white', margin: '1.5rem' }} />
                                <div className='mx-10'>
                                    <div className='font-staatliches font-size-18'>TEAM CAPTAIN</div>
                                    <hr className='p-0 m-0 w-md-full w-three-quarter mb-5' style={{ background: "#ec7b4d", height: '0.1px' }} />
                                    <div className='font-staatliches font-size-24 gradient-text'>{car.driver.name}</div>
                                    <div className='font-fira-sans font-size-14 font-weight-light gradient-text'>{car.driver.studies}</div>
                                </div>
                            </div>
                        </div>
                        <div className='order-1 order-md-2 p-20 clipped-div'>
                          <img alt={car.version} src={car.images[0]} className='w-md-450 h-md-400 w-full' style={{ filter: 'grayscale(50%)' }}/>
                        </div>
                    </div>
                    <hr className='d-none d-md-block' style={{ background: "#ec7b4d", width: '80vw', height: '0.1rem' }} />
                    <div className='font-staatliches font-size-20 my-20 text-white d-none d-md-block gradient-text' style={{ letterSpacing: '1rem' }}>- DETAILS -</div>
                    <div className="row w-md-three-quarter text-white justify-content-start font-fira-sans mx-20" style={{ letterSpacing: '0.2rem' }}>
                        {
                          (car.suspension.front || car.suspension.rear) && <div class='col-md-3 col-12'>                            
                              <div className='d-flex flex-column m-20 align-items-center text-center text-md-left align-items-md-start'>
                                <div className='font-staatliches font-size-22 mb-10' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Suspension</div>
                                {car.suspension.front && <div className='font-fira-sans font-size-16 font-weight-light my-5'><span className='bg-dark mr-10 border p-5 rounded font-weight-medium'>Front</span>{car.suspension.front}</div>}
                                {car.suspension.rear && <div className='font-fira-sans font-size-16 font-weight-light my-5'><span className='bg-dark mr-10 border p-5 rounded font-weight-medium'>Rear</span>{car.suspension.rear}</div>}
                                </div>
                              </div>
                        }
                        {
                          (car.wheels.front || car.wheels.rear) &&
                          <div className='col-md-3 col-12'>
                            <div className='d-flex flex-column m-20 align-items-center text-center text-md-left align-items-md-start'>
                            <div className='font-staatliches font-size-22 mb-10' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Wheels</div>
                                {car.wheels.front && <div className='font-fira-sans font-size-16 font-weight-light my-5'><span className='bg-dark p-5 mr-10 border rounded font-weight-medium'>Front</span>{car.wheels.front}</div>}
                                {car.wheels.rear && <div className='font-fira-sans font-size-16 font-weight-light my-5'><span className='bg-dark p-5 mr-10 border rounded font-weight-medium'>Rear</span>{car.wheels.rear}</div>}
                            </div>
                          </div>
                        }
                        {
                          car.brakes && 
                          <div class='col-md-3 col-12'>
                            <div className='d-flex flex-column m-20 align-items-center text-center text-md-left align-items-md-start'>
                              <div className='font-staatliches font-size-22 mb-10' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Brakes</div>
                              <div className='font-fira-sans font-size-16 font-weight-light'>{car.brakes}</div>
                            </div>
                          </div>
                        }
                        {
                          car.transmission &&
                          <div class='col-md-3 col-12'>
                            <div className='d-flex flex-column m-20 align-items-center align-items-md-start text-center text-md-left'>
                                <div className='font-staatliches font-size-22 mb-10' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Transmission</div>
                                <div className='font-fira-sans font-size-16 font-weight-light'>{car.transmission}</div>
                            </div>
                          </div>
                        }
                    </div>
                    <div className="row w-md-three-quarter text-white justify-content-center font-fira-sans mx-20 mb-20" style={{ letterSpacing: '0.2rem' }}>
                        {
                          car.steering && 
                          <div className='col-12'>
                            <div className='d-flex flex-column m-20 align-items-center align-items-md-start text-center text-md-left'>
                              <div className='font-staatliches font-size-22 mb-10' style={{ width: 'fit-content', borderBottom: '0.1px solid #ec7b4d' }}>Steering</div>
                              <div className='font-fira-sans font-size-16 font-weight-light'>{car.steering}</div>
                            </div>
                          </div>
                        }
                    </div>
                    <hr className='d-none d-md-block my-20' style={{ background: "#ec7b4d", width: '80vw', height: '0.1rem' }} />
                    <div className='d-md-block w-md-three-quarter w-full p-md-0 p-10 my-20'>
                        <p className='text-center gradient-text font-staatliches font-size-22' style={{ letterSpacing: '1rem' }}>- GLIMPSES -</p>
                        <div className='row justify-content-center'>
                          {car.images[0] && <div className='car-image-1 col-md-6 col-12'></div>}
                          {car.images[1] && <div className='car-image-2 col-md-5 col-12'></div>}
                          {car.images[2] && <div className='car-image-3 col-md-7 col-12'></div>}
                          {car.images[3] && <div className='car-image-4 col-md-4 col-12'></div>}
                          {car.images[4] && <div className='car-image-5 col-md-11 col-12'></div>}
                        </div>
                    </div>
                  </div>
                  <style jsx>
                  {`
                    .driver-card {
                      background-color: rgba(0, 0, 0, 0.45);
                      border-radius: 100px 10px 10px 100px;
                    }
                    .car-image-1 {
                      background-image: url('${car.images[0]}');
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      height: 400px;
                      margin: 0.1rem;
                    }
                    .car-image-2 {
                      background-image: url('${car.images[1]}');
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      height: 400px;
                      margin: 0.1rem;
                    }
                    .car-image-3 {
                      background-image: url('${car.images[2]}');
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      height: 400px;
                      margin: 0.1rem;
                    }
                    .car-image-4 {
                      background-image: url('${car.images[3]}');
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      height: 400px;
                      margin: 0.1rem;
                    }
                    .car-image-5 {
                      background-image: url('${car.images[4]}');
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                      height: 400px;
                      margin: 0.1rem;
                    }
                    @media only screen and (max-width: 800px){
                      .clipped-div {
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                      }
                      .driver-card {
                        border-radius: 10px;
                      }
                    }
                  `}
                  </style>
                </> 
            }
            <Footer />
        </div>
    );
}

export default CarsDetailPage;