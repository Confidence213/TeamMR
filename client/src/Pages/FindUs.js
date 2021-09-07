import React from "react";
import { Helmet } from 'react-helmet';
import aviral  from "./../Assets/devs/aviral.png";
import  parthiv from "./../Assets/devs/parthiv.png";
import pal from "./../Assets/devs/pal.png";
import { GitHub, Instagram, Linkedin } from "react-feather";
import { Link } from 'react-router-dom';

const FindUs = () => {

    const devs = [
        {
            name: "Aviral Gupta",
            also: "no-name",
            github: "https://github.com/Aviral044",
            linkedin: "https://www.linkedin.com/in/aviral-gupta-5984b31a0/",
            instagram: "https://www.instagram.com/aviralgupta044/",
            photo: aviral,
            bio: "Developer with a sense of humour"
        },
        {
            name: "Parthiv Menon",
            also: "theProton",
            github: "https://github.com/Parthiv-M",
            linkedin: "https://www.linkedin.com/in/parthivmenon/",
            instagram: "https://www.instagram.com/_.parthiv_/",
            photo: parthiv,
            bio: "Full stack developer();"
        },
        {
            name: "Pal Chheda",
            also: "funny-man",
            github: "https://github.com/PalChheda",
            linkedin: "",
            instagram: "https://www.instagram.com/pal_chheda/",
            photo: pal,
            bio: "Front-end developer"
        }
    ] 

    return (
        <div>
            <Helmet>
                <title>Developers | Team Manipal Racing</title>
                <meta name='description' content='The official website of Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content='https://teammanipalracing.in/' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.in/" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Home | Team Manipal Racing"
                />
                <meta
                  property="og:description"
                  content="The official website of Team Manipal Racing"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing.in/' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='Home | Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content="The official website of Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div className="p-10">
                <Link to='/'><button className="btn bg-transparent font-size-16 font-fira-sans w-auto m-20 d-none d-md-block" style={{ color: '#ec7b4d', borderColor: '#ec7b4d', letterSpacing: '0.1rem' }} type="button">Back</button></Link>
            </div>
            <div className="container mx-auto w-full h-250 d-flex align-items-center">
                <div className="text-center text-white font-fira-sans w-md-half w-three-quarter mx-auto mb-20">
                    <p className="font-size-24 pb-10" style={{ borderBottom: "2px dashed white" }}>
                        <span className="font-size-20 font-weight-bold" style={{ color: "#EC7B4D" }}>{"</> "}</span>
                        The Developers
                    </p>
                    <p>
                        We are student developers from Manipal Institute of Technology. Driven by passion and fuelled by creativity, we like to 
                        expand our horizons with every idea we work on. Connect with us, because we love to interact!
                    </p>
                </div>
            </div>
            <div className="my-20 row w-full justify-content-center">
                {
                    devs.map((dev, index) => {
                        return (
                            <div key={index} className="col-md-3 d-flex flex-column align-items-center justify-content-center h-md-400 mx-5 my-md-0 my-10">
                                <div className="w-full text-center">
                                    <img className="mx-auto" src={dev.photo} alt={dev.name}/>
                                </div>
                                <div className="w-three-quarter">
                                  <h2 className="text-center mb-0 font-staatliches text-white">
                                    {dev.name}
                                  </h2>
                                  <div className="bg-white w-full" style={{ height: "1px" }}></div>
                                  <h3 className="text-center font-fira-sans text-white font-size-16">
                                      {dev.bio}
                                  </h3>
                                  <div className="d-flex justify-content-center align-items-center">
                                      {
                                          dev.github ? 
                                          <a className="mx-5 text-white" href={dev.github} rel="noreferrer" target="_blank" style={{ cursor: "pointer" }}><GitHub /></a> 
                                          : ""
                                      }
                                      {
                                         dev.linkedin ? 
                                         <a className="mx-5 text-white" href={dev.linkedin} rel="noreferrer" target="_blank" style={{ cursor: "pointer" }}><Linkedin /></a> 
                                         : ""
                                      }
                                      {
                                          dev.instagram ? 
                                          <a className="mx-5 text-white" href={dev.instagram} rel="noreferrer" target="_blank" style={{ cursor: "pointer" }}><Instagram /></a> 
                                          : ""
                                      }
                                  </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    );
}

export default FindUs;