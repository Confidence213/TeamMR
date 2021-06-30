import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './../Styles/carStyles.css';

const CarCards = ({data}) => {
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
        data.map((item, ind) => {
            return(
                <Link key={ind} to={`cars/version-${ind+1}`}>
                    <div className='card h-md-150 h-200 w-md-200 w-300 mx-10 my-10 d-flex p-md-10' style={{ border:'none', borderRadius: 4, letterSpacing:'0.2rem' }} >
                        <img src={item.image} alt={item.version} className='position-absolute z-0' style={{ left:'0', border: 'none', borderRadius: 4, top:'0', width:'100%', height:'100%', filter:'brightness(50%)'}} />
                        <div className='position-absolute z-10' style={{ left:'0', top:'0', width:'100%', height:'100%', border: 'none', borderRadius: 4, backgroundColor: 'black', opacity: '40%' }}></div>
                        <div className={`text-white font-fira-sans font-size-24 z-20 position-relative text-center ${(hover && index === (item.versionNo)) ? 'm-auto' : 'mt-auto mx-auto'}`} style={{ pointerEvents:'none' }}>
                            {item.version}
                        </div>
                        <div className='z-10 card-hover position-absolute' style={{ left:'0', top:'0', width:'100%', height:'100%', border: 'none', borderRadius: 4 }} onMouseEnter={() => onHover(item.versionNo)} onMouseLeave={noHover}></div>
                    </div>
                </Link>
            );
        })
    );
    
}

export default CarCards;