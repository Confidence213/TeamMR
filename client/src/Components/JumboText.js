
import React from 'react';
import './../Styles/globalStyles.css';
import Typewriter from 'typewriter-effect';

const JumboText = () => {
    return (
        <div style={{height: '100vh'}}>
            <div className='container-fluid w-full'>
                <div className='d-flex flex-column text-center text-md-left m-auto justify-content-center w-md-three-quarter w-full' style={{height: '100vh', }}>
                    <h1 className='font-fira-sans' style={{ letterSpacing: '1rem', fontSize:'6.25rem', color:'#FFFFFF', fontWeight: '800' }}> 
                        TEAM<br/>MANIPAL<br/> RACING</h1>
                    <p className='font-staatliches' style={{ fontSize:'5rem', color:'#ec7b4d', marginTop: '-5px' }}>
                        <Typewriter
                          options={{
                            strings: ['Innovate', 'Initiate', 'Incarnate'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1800
                          }}
                        />
                    </p>
                </div>
            </div>
         </div>
    )
}

export default JumboText;