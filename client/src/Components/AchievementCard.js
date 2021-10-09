import React, { useEffect } from 'react';
import AOS from 'aos';

const AchievementCard = (props) => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
    }, []);

    return(
        <div data-aos='fade-down' className='text-white col-md-4 col-12 d-flex flex-column align-items-center m-20 h-auto' >
            <div className='font-staatliches gradient-text' style={{ fontSize: '10rem', color: 'rgba(144,144,144,0.8)'}}>{props.year}</div>
            <div className='d-flex flex-column m-10 w-300 ml-20'>
                <div className='font-staatliches' style={{ color: '#D25D2A', fontSize: '3.5rem', margin: '1.5rem 0' }}>{props.title}</div>
                {
                    props.achieveList.map(item => {
                        return (
                            <div className='row align-items-start my-5'>
                                <div className='col-3 font-fira-sans text-center font-size-14 p-5' style={{ marginRight: '5px', color: '#D25D2A', border: '#D25D2A solid 2px', borderRadius: '10px'}}>{item.position}</div>
                                <div className='col-8 font-fira-sans font-size-20 font-weight-regular'>{item.description}</div>
                            </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default AchievementCard;