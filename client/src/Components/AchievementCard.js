import React, { useEffect } from 'react';
import AOS from 'aos';

const AchievementCard = (props) => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
    }, []);

    return(
        <div data-aos='fade-right' className='text-white h-full my-15 row w-full border rounded' style={{ backgroundColor:'rgba(1, 1, 1, 0.5)', backdropFilter: 'blur(10px)' }}>
            <div className='col-md-4 col-12 m-auto p-10'>
                <img src={props.image} className='w-full' alt={props.title}/>
            </div>
            <div className='col-md-6 col-12 m-auto px-20'>
                <div className='font-staatliches gradient-heading' style={{ color:'#D25D2A', fontSize:'3rem', borderBottom:'0.7px solid white', marginBottom:'1.5rem'}}>{props.title}</div>
                {props.achieved.map(item => {
                    return (
                        <div className='d-flex w-full flex-md-row flex-column align-items-left align-md-items-center my-10'>
                            <div className='font-fira-sans text-center w-150 mx-5' style={{ color:'#D25D2A', border:'#D25D2A solid 2px', borderRadius:'30px', height:'3.5rem'}}>
                                <p className='m-auto font-size-18'>{item.position} PLACE</p>
                            </div> 
                            <div className='font-fira-sans w-md-three-quarter w-full font-size-18 font-weight-lighter mt-10 mt-md-0 pl-10 p-md-0'>{item.for}</div>
                        </div>
                    )
                    })
                }
            </div>
            <div className='col-md-2 col-12 justify-content-center align-items-center d-flex'>
                <div className='font-staatliches rotated-text gradient-text'>{props.year}</div>
            </div>
            <style jsx>
                {`
                    .rotated-text{
                        font-size: 10rem;
                        letter-spacing: 2rem;
                        color: rgba(144,144,144,0.8);
                        transform: rotate(-90deg)
                    }
                    @media only screen and (max-width: 800px) {
                        .rotated-text {
                            font-size: 6rem;
                            transform: rotate(0deg);
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default AchievementCard;