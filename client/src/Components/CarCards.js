import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './../Styles/carStyles.css';

const CarCard = ({data}) => {
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
        <Link to={`/cars/version-${data.version}`}>
            <div className='card h-md-150 h-200 w-md-200 w-300 mx-10 my-10 d-flex p-md-10' style={{ border:'none', borderRadius: 4, letterSpacing:'0.2rem' }} >
                <img src={data.images[0]} alt={data.version} className='position-absolute z-0' style={{ left:'0', border: 'none', borderRadius: 4, top:'0', width:'100%', height:'100%', filter:'brightness(50%)'}} />
                <div className='position-absolute z-10' style={{ left:'0', top:'0', width:'100%', height:'100%', border: 'none', borderRadius: 4, backgroundColor: 'black', opacity: '40%' }}></div>
                <div className="mx-auto d-flex flex-column justify-content-center align-items-center">
                    <div className={`text-white font-fira-sans font-size-24 z-20 position-relative text-center m-auto ${(hover && index === (data.version)) ? 'm-auto' : 'mt-auto mx-auto'}`} style={{ pointerEvents:'none' }}>
                        { data.electric && "e" }v{data.version}
                    </div>
                    {
                        data.electric 
                        ? 
                        <p style={{ border: "1px solid white" }} className="px-5 font-staatliches z-20 text-white p-0 m-0 font-size-18">E-Baja</p>
                        : <p style={{ border: "1px solid white" }} className="px-5 font-staatliches z-20 text-white p-0 m-0 font-size-18">M-Baja</p>
                    }
                </div>
                <div className='z-10 card-hover position-absolute' style={{ left:'0', top:'0', width:'100%', height:'100%', border: 'none', borderRadius: 4 }} onMouseEnter={() => onHover(data.version)} onMouseLeave={noHover}></div>
            </div>
        </Link>
    );
    
}

export default CarCard;