import React, { useEffect } from 'react';
import './../Styles/globalStyles.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const WhoAreWe = () => {

    const achieveCoinData = [
        {
            number: 10,
            name: 'Cars'
        },
        {
            number: 10,
            name: 'Events'
        },
        {
            number: 10,
            name: 'Trophies'
        }
    ];
    
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <div className='h-full'>
            <div className='container-fluid'>
                <div className='row justify-content-center m-auto'>
                    <div className='col-lg-8 col-md-10 col-12'>
                        <h1 className='text-center font-staatliches pt-20 gradient-heading' style={{ color:'#EC7B4D', fontSize:'6rem' }}>WHO ARE WE?</h1>
                        <p className='text-justify font-fira-sans p-20 gradient-text' style={{ color:'#efefef',fontSize:'1.6rem', textAlignLast: 'center' }}>
                            Team Manipal Racing is the official off-road racing club of Manipal University. We design and fabricate All-Terrain Vehicles (ATVs) according to the rules laid 
                            by SAE BAJA. The three words <span className='font-italic'>innovate, initiate, </span> and <span className='font-italic'>incarnate</span> shape the work at Team Manipal Racing. We not only conceptualize ideas but also substantiate them 
                            into reality. TMR took up its first project at the SAE BAJA which was held in Wisconsin, USA. It was the first Indian team to qualify for the competition and one 
                            of the two teams representing Asia. By implementing the concepts practically and competing at BAJA events worldwide, we are not only building off road cars but also 
                            creating real engineers and making the university and the nation proud. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="d-flex flex-md-row flex-column justify-content-md-around align-items-center m-auto w-three-quarter w-md-half">
                    {
                        achieveCoinData.map((coin, index) => {
                            return (
                                <div key={index} data-aos='fade-up' data-aos-easing='ease-in-sine' className="text-center d-flex flex-md-column align-items-center justify-content-center m-md-0 my-15" style={{ color: '#EC7B4D', border: '5px solid #EC7B4D', borderRadius: '50%', height: '16.5rem', width: '16.5rem' }}>
                                    <div>
                                        <h1 className='m-0 font-fira-sans'>{coin.number}</h1> 
                                        <h3 className='m-0 font-weight-light font-fira-sans'>{coin.name.toUpperCase()}</h3>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WhoAreWe;