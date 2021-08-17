import React from 'react';
import { Instagram, Linkedin } from 'react-feather';

const TeamMemberCard = (props) => {
    return (
        <div className="d-flex flex-column w-250 mx-auto h-350 justify-content-center align-items-center">
            <div className="h-150 my-5">
                <img className="h-full" alt={props.data.name} style={{borderRadius: "50%"}} src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"></img>
            </div>
            <div className="my-5 font-staatliches font-size-24" style={{ color: '#EC7B4D' }}>{props.data ? props.data.name : ""}</div>
            <div className="font-fira-sans font-size-20 p-5 text-white" style={{ borderTop: '4px solid white' }}>{props.data ? props.data.position : ""}</div>
            {/* {
            props.data.socialLinks ?
                <div className="d-flex justify-content-center align-items-center">
                    {
                        props.data.socialLinks.instagram 
                        ? 
                        <a href={props.data.socialLinks.instagram} target="_blank" rel="noreferrer" className="text-white"><Instagram className="mx-5" size={30}/></a>
                        : ""
                    }
                    {
                        props.data.socialLinks.linkedin 
                        ?
                        <a href={props.data.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-white"><Linkedin className="mx-5" size={30}/></a>
                        : ""
                    }
                </div> 
                : ""
            } */}
        </div>
    );
}

export default TeamMemberCard;