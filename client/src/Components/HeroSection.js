import React from 'react';

const HeroSection = (props) => {

    return (
        <div className='container-fluid w-three-quarter my-20 hero' style={{ backgroundImage: `url(${props.styleProps.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='h-full w-full' style={{ backgroundColor: 'rgba(236, 123, 77, 0.4)' }}>
                <div className='h-full w-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(8px)' }}>
                    <div className={`py-20 w-md-three-quarter w-full h-md-400 m-auto d-flex flex-column justify-content-center align-items-center align-items-md-${props.styleProps.align}`}>
                        <h1 className='font-staatliches m-0 text-white' style={{ fontSize:'5rem' }}>
                            {props.data.title}
                        </h1>
                        <p className='m-0 font-size-20 font-fira-sans text-left font-weight-bold' style={{ color: '#ec7b4d' }}>
                            {props.data.full}
                        </p>
                        <div className='w-three-quarter'>
                            <p className='font-fira-sans p-0  m-0 text-justify text-white font-weight-regular' style={{ fontSize:'1.5rem' }}>
                                {props.data.detail}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;