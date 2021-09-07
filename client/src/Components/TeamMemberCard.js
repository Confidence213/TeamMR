import React from 'react';

const TeamMemberCard = (props) => {
    return (
        <div className="d-flex flex-column w-full h-350 justify-content-center align-items-center mx-20">
            <div className="h-150 w-150 my-5">
                <img className="w-full h-full" alt={props.data.name} style={{borderRadius: "50%"}} src={props.data.image}></img>
            </div>
            <div className="my-5 font-staatliches font-size-24" style={{ color: '#EC7B4D' }}>{props.data ? props.data.name : ""}</div>
            <div className="font-fira-sans font-size-20 py-5 text-white w-200" style={{ borderTop: '4px solid white' }}>{props.data ? props.data.position : ""}</div>
        </div>
    );
}

export default TeamMemberCard;