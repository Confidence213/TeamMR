import React from 'react';
import { Linkedin } from 'react-feather';

const AlumniCard = (props) => {
    return (
        <div className="col-md-5 col-12 h-100 mx-5 border border-dark row my-5" style={{ backgroundColor:'rgba(1,1,1,0.4)', borderRadius:'10px' }}>
            <div className="col-10 d-flex flex-column px-20 justify-content-center">
                <div className='font-size-18 font-fira-sans font-weight-bold' style={{ color: "#EC7B4D" }}>{props.name}</div>
                <div className='font-size-16 font-fira-sans text-white'>{props.position}</div>
                <p className="font-size-16 font-staatliches m-0" style={{ color: "gray", letterSpacing: "2px" }}>{props.teamType}</p>
            </div>
            {
                props.linkedin ?
                <div className="col-2 mx-auto d-flex align-items-center justify-content-center bg-dark" style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                    <a target="_blank" rel="noreferrer" href={props.linkedin}>
                        <Linkedin size={30} color='white'/>
                    </a>
                </div>
                : "" 
            }
        </div>
    );
}

export default AlumniCard;