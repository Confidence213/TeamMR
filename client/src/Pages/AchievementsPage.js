import AchievementCard from '../Components/AchievementCard';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import LoaderComponent from '../Components/LoaderComponent';

const AchievementsPage = () => {

    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData  () {
            const resAchieve = await axios.get('/api/achievements');
            setAchievements(resAchieve.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div>
            <Helmet>
                <title> Achievements | Team Manipal Racing</title>
                <meta name='description' content='We are proud of what we achieve at Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv, achievements'
                />
                <meta name='url' content='https://teammanipalracing.in/achievements' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href='https://teammanipalracing.in/achievements' />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content='What we have achieved at Team Manipal Racing'
                />
                <meta
                  property="og:description"
                  content='What we have achieved at Team Manipal Racing'
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing.in/achievements' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='What we have achieved at Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content='What we have achieved at Team Manipal Racing'
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className='d-flex flex-column position-relative' style={{ height:'40vh' }}>
                <NavBar/>
                <div className='z-10 achievements-banner'/>
                <div className="font-roboto text-white font-weight-bolder text-center mt-auto px-10 z-30" style={{ fontSize:'5vmax', letterSpacing:'0.3rem'}}>
                    Achievements
                </div>
            </div>
            {
                loading ? <div className='h-550'><LoaderComponent /></div> : 
                <div>
                    <div className='font-fira-sans text-white font-size-16 text-center w-md-half mx-auto' style={{ padding:'5rem 5rem' }}>
                        <p className='text-white'>
                            At Team Manipal Racing, we are proud of our achievements. Earned through years of teamwork, perseverance, and relentless effort, 
                            these are some of our proudest moments as a team. 
                        </p>
                    </div>
                    <div className='container-fluid w-md-three-quarter w-full'>
                        <div className='row justify-content-center'>
                            {achievements.map((item, index) => {
                                return <AchievementCard 
                                    title={item.name}
                                    achieveList={item.achievementList}
                                    image={item.image}
                                    year={item.year}
                                    key={index}
                                />})
                            }
                        </div>
                    </div>
                </div>
            }
            <Footer/>
        </div>
    )
}

export default AchievementsPage;