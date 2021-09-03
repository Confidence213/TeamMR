import React, { useEffect } from 'react';
import './../Styles/globalStyles.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const WhoAreWe = () => {
    
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
        </div>
    )
}

export default WhoAreWe;