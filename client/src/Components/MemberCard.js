import React from 'react';

const MemberCard = (props) => {
    return (
        <div className="d-flex w-250 bg-dark h-50 justify-content-center align-items-center my-5">
            <div className="font-staatliches font-size-24" style={{ color: '#EC7B4D' }}>{props.data ? props.data.name : ""}</div>
        </div>
    );
}

export default MemberCard;