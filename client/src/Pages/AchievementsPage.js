import AchievementCard from '../Components/AchievementCard';
import React from 'react';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';

const achievements = [
    {
        year:'2009',
        image:'https://live.staticflickr.com/65535/51259439910_3e4e5bd0e8.jpg',
        title:'SAE BAJA Wisconsin',
        achieved:[
            {
                position:'1st',
                for:'Design presetation',
            },
            {
                position:'2nd',
                for:'Acceleration',
            },
            {
                position:'7th',
                for:'Among all teams',
            },
            {
                position:'3rd',
                for:'Overall dynamics',
            }
        ]
    },
    {
        year:'2010',
        image:'https://live.staticflickr.com/65535/51259439910_3e4e5bd0e8.jpg',
        title:'SAE BAJA Wisconsin',
        achieved:[
            {
                position:'1st',
                for:'Design presetation',
            },
            {
                position:'2nd',
                for:'Acceleration',
            },
            {
                position:'7th',
                for:'Among all teams',
            },
            {
                position:'3rd',
                for:'Overall dynamics',
            }
        ]
    },
    {
        year:'2012',
        image:'https://live.staticflickr.com/65535/51259439910_3e4e5bd0e8.jpg',
        title:'SAE BAJA Wisconsin',
        achieved:[
            {
                position:'1st',
                for:'Design presetation',
            },
            {
                position:'2nd',
                for:'Acceleration',
            },
            {
                position:'7th',
                for:'Among all teams',
            },
            {
                position:'3rd',
                for:'Overall dynamics',
            }
        ]
    },
    {
        year:'2013',
        image:'https://live.staticflickr.com/65535/51259439910_3e4e5bd0e8.jpg',
        title:'SAE BAJA Wisconsin',
        achieved:[
            {
                position:'1st',
                for:'Design presetation',
            },
            {
                position:'2nd',
                for:'Acceleration',
            },
            {
                position:'7th',
                for:'Among all teams',
            },
            {
                position:'3rd',
                for:'Overall dynamics',
            }
        ]
    },
]

const AchievementsPage = () => {
    return (
        <div>
            <Helmet>
                <title> {cleanVersion()} | Team Manipal Racing</title>
                <meta name='description' content='We are proud of what we achieve at Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content='https://teammanipalracing/achievements' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href='https://teammanipalracing/achievements' />
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
                <meta property="og:url" content='https://teammanipalracing/achievements' />
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
            {/* <div className='black-overlay'></div> */}
            <div className='d-flex flex-column position-relative' style={{ height:'40vh' }}>
                <NavBar/>
                <div className='z-10 achievements-banner'/>
                <div className="font-staatliches text-white font-weight-bolder text-center mt-auto px-10 z-30" style={{ fontSize:'5vmax', letterSpacing:'0.3rem'}}>
                    Achievements
                </div>
            </div>
            <div>
                <div className='font-fira-sans text-white font-size-16 text-center w-md-half mx-auto' style={{ padding:'5rem 5rem' }}>
                    <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                <div className='container-fluid w-md-three-quarter w-full'>
                    <div className='row justify-content-center'>
                        {achievements.map((item) => {
                            return <AchievementCard 
                                title={item.title}
                                achieved={item.achieved}
                                image={item.image}
                                year={item.year}
                            />})
                        }
                    </div>
                </div>
            </div>
            <Footer/>
            <style jsx>{`
                .achievements-banner{
                    top: 0;
                    left: 0;
                    filter: brightness(40%);
                    height: 40vh;
                    width: 100vw;
                    position: absolute;
                    background-repeat: no-repeat;
                    background: url('https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80');
                    background-size: cover;
                    background-position: center;
                }
                .achievements-back{
                    top: 0;
                    z-index: -99;
                    left: 0;
                    background-attachment: fixed;
                    background-repeat: no-repeat;
                    background: url('https://live.staticflickr.com/65535/51258599313_3b25f60472.jpg');
                    background-size: cover;
                    background-position: center;
                }
                .black-overlay{
                    top: 0;
                    left: 0;
                    position: fixed;
                    width: 100vw;
                    height: 100%;
                    opacity: 0.8;
                    background-color: black;
                }
            `}
            </style>
        </div>
    )
}

export default AchievementsPage;