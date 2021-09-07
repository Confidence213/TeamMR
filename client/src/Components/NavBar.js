import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../Assets/tmrLogo.png';
import logoE from './../Assets/tmrELogo.png';
import { X, Menu } from 'react-feather';

const Navbar = () => {

    // function to toggle the side bar on smaller screens
    const toggleSideBar = () => {
        if(document.getElementById('sidebar').classList.contains('d-none')){
            document.getElementById('sidebar').classList.remove('d-none');
            document.getElementById('sidebar').classList.add('d-block');
            document.getElementById('menu-icon').classList.remove('d-block');
            document.getElementById('menu-icon').classList.add('d-none');
        } else {
            document.getElementById('sidebar').classList.remove('d-block');
            document.getElementById('sidebar').classList.add('d-none');
            document.getElementById('menu-icon').classList.remove('d-none');
            document.getElementById('menu-icon').classList.add('d-block');
        }
    }
    
    const [scroll, setScroll] = useState(false);
    
    useEffect(() => {

        const handleScroll = () => {
            setScroll(window.scrollY > 150);
        }
        window.addEventListener('scroll', handleScroll);
        return function cleanupListener() {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
            <nav className={`navbar with-sidebar border-0 h-auto font-weight-bold position-fixed fixed-top z-40 ${scroll ? "" : 'bg-transparent'}`} style={{ backgroundColor:'#090909', opacity:'0.99', WebkitTransition: 'all 0.4s ease'}}> 
                <div className='m-0 d-md-none d-block'>
                    <div className='p-15 pl-10' id='menu-icon'>
                        <Menu onClick={toggleSideBar} color='#EFEFEF' size={30} style={{ transform: 'scaleY(-1)' }}/>
                    </div>
                </div>
                <div className='d-none d-md-block'>
                    <div className='navbar-brand px-10 py-5 d-block'>
                        <Link to='/'><img src={logo} alt='TMR Logo' className='h-50' style={{ padding:'0.9rem 0' }}/></Link>
                        <Link to='/'><img src={logoE} alt='TMR Logo' className='h-50' style={{ padding:'0.7rem 0' }}/></Link>
                    </div>
                </div>
                <div className='navbar-content d-flex ml-auto' style={{ letterSpacing:'0.3rem' }}>
                    <Link to='/cars' className='navbar-link font-size-14 px-10 d-none d-md-block font-staatliches'>
                        CARS
                    </Link>
                    <Link to='/achievements' className='navbar-link font-size-14 px-10 d-none d-md-block font-staatliches'>
                        ACHIEVEMENTS
                    </Link>
                    <Link to='/team' className='navbar-link font-size-14 px-10 d-none d-md-block font-staatliches'>
                        TEAM
                    </Link>
                    <Link to='/alumni' className='navbar-link font-size-14 px-10 d-none d-md-block font-staatliches'>
                        ALUMNI
                    </Link>
                    <Link to='/sponsors' className='navbar-link font-size-14 px-10 d-none d-md-block font-staatliches'>
                        SPONSORS 
                    </Link>                    
                </div>
                <div className='sidebar w-full d-none z-10' id='sidebar' style={{ backgroundColor:'rgba(0, 0, 0, 0.95)', height:'100vh' }}>
                    <div className='font-staatliches font-weight-light font-size-20 d-flex flex-column justify-content-center align-items-center' style={{ height:'100vh', letterSpacing: '5px' }}>
                        <div className='close-sidebar' style={{ position: 'fixed', top:'4rem', right: '4rem', color:'#ec7b4d' }}>
                            <X onClick={toggleSideBar} size={50}/>
                        </div>
                        <div className='sidebar-divider'></div>
                        <Link to='/cars' className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15" style={{ width: 'fit-content', borderBottom: '1px solid #ec7b4d' }}>
                            CARS
                        </Link>
                        <Link to='/achievements' className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15" style={{ width: 'fit-content', borderBottom: '1px solid #ec7b4d' }}>
                            ACHIEVEMENTS
                        </Link>
                        <Link to='/team' className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15" style={{ width: 'fit-content', borderBottom: '1px solid #ec7b4d' }}>
                            TEAM
                        </Link>
                        <Link to='/alumni' className='sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15' style={{ width: 'fit-content', borderBottom: '1px solid #ec7b4d' }}>
                            ALUMNI
                        </Link>
                        <Link to='/sponsors' className="sidebar-link sidebar-link-with-icon font-size-24 font-weight-bolder text-white mx-20 my-15" style={{ width: 'fit-content', borderBottom: '1px solid #ec7b4d' }}>
                            SPONSORS
                        </Link>
                    </div>
                    <Link to='/' className='p-0 d-flex align-items-center justify-content-center' style={{ position: 'fixed', bottom:'4rem', left:'50%', right:'50%' }}>
                        <img src={logo} alt='TMR Logo' className='h-50'/>
                    </Link>
                </div>
            </nav>
    )
}

export default Navbar;