import React from 'react';

const TeamMemberCard = (props) => {
    return (
        <div className="d-flex flex-column w-250 mx-auto h-350 justify-content-center align-items-center">
            <div className="h-150 w-150 my-5">
                <img className="w-full h-full" alt={props.data.name} style={{borderRadius: "50%"}} src={props.data.image}></img>
            </div>
            <div className="my-5 font-staatliches font-size-24" style={{ color: '#EC7B4D' }}>{props.data ? props.data.name : ""}</div>
            <div className="font-fira-sans font-size-20 p-5 text-white" style={{ borderTop: '4px solid white' }}>{props.data ? props.data.position : ""}</div>
        </div>
    );
}

export default TeamMemberCard;