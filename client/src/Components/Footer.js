import React, { useState } from 'react';
import logo from './../Assets/tmrLogo.png';
import { Facebook, Instagram, Linkedin, Mail } from 'react-feather';

const Footer = () => {
    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const onHover = (index) => {
        setHover(true);
        setIndex(index);
    }
    
    const noHover = () => {
        setHover(false);
        setIndex(0);
    }

    return (
        <div className='container-fluid'>
            <div className='row p-20 justify-content-around align-items-center text-white font-fira-sans z-10' style={{ backgroundColor:'#0e0e0e' }}> 
                <div className='col-md-4 col-12 m-md-0 my-15 text-center'>
                    <a href='/'>
                        <img src={logo} alt="TMR Logo" style={{ height: '7rem' }}/>
                    </a>
                </div>
                <div className='col-md-4 col-12 pl-md-20 text-center text-md-left w-300' style={{ lineHeight:'0.1rem'}}>
                    <h4 className='font-weight-bold pl-md-20 mr-md-auto'>Team Manipal Racing</h4>
                    <h5 className='font-weight-light pl-md-20 mr-md-auto'>Manipal Institute of Technology</h5>
                    <h5 className='font-weight-light pl-md-20 mr-md-auto'>Udupi, Karnataka</h5>
                    <h5 className='font-weight-light pl-md-20 mr-md-auto'>576104</h5>
                </div>
                <div className='col-md-4 col-12 m-md-0 my-15 text-center' style={{ lineHeight:'0.09rem' }}>
                    <div className='d-flex flex-row justify-content-center'>
                        <a className='m-5' target='_blank' rel='noreferrer' href='/dummy'>
                            <Instagram onMouseEnter={() => onHover(1)} onMouseLeave={noHover} size={30} color={ hover && index === 1 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                        <a className='m-5' target='_blank' rel='noreferrer' href='/dum'>
                            <Linkedin onMouseEnter={() => onHover(2)} onMouseLeave={noHover} size={30} color={ hover && index === 2 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                        <a className='m-5' target='_blank' rel='noreferrer' href='/dummy'>
                            <Mail onMouseEnter={() => onHover(3)} onMouseLeave={noHover} size={30} color={ hover && index === 3 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                        <a className='m-5' target='_blank' rel='noreferrer' href='/dummy'>
                            <Facebook onMouseEnter={() => onHover(4)} onMouseLeave={noHover} size={30} color={ hover && index === 4 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                    </div>
                    {/* <div className='font-fira-sans m-20 font-size-16 font-weight-light'>
                        <p>CONNECT WITH TMR</p>
                    </div> */}
                    <hr style={{ background:"#ec7b4d", width:'15rem', height:'0.01rem' }}/>
                    <div className='font-fira-sans m-20 font-size-14 font-weight-lighter'>
                        <p>- We made this website -</p>
                    </div>
                    <button className='btn font-size-12 font-fira-sans findus-button' type="button">
                        FIND US
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer