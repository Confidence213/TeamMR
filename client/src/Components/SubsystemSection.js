import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import MemberCard from './MemberCard';

const SubsystemSection = (props) => {
    return (
        <div className="w-full">
            {
                props.data.subTeam.length !== 0 &&
                <>
                    <div className="row">
                        <div className="col-md-9 col-11 mx-auto d-flex flex-column align-items-md-start align-items-center">
                            <p className="font-staatliches font-size-24 text-white">
                                {props.data.name}
                            </p>
                            <p className="text-white text-left font-fira-sans">
                                { props.data.description ? props.data.description : "There is no description here yet" }
                            </p>
                        </div>
                        <div className="col-md-3 col-12">
                            {
                                props.data.subHead ? 
                                <TeamMemberCard data={props.data.subHead}/> : ""
                            }
                        </div>
                    </div>
                    <div className="row">
                    {
                        props.data.subTeam.map((team, index) => {
                            return (
                                <div className="col-md-3 col-12">
                                    <MemberCard 
                                        data={team} 
                                        key={index}
                                    />
                                </div>
                            )}
                        )
                    }   
                    </div>
                    <div className="w-full bg-dark my-10" style={{ height: '2px' }}></div>
                </>
            }
        </div>
    );
}

export default SubsystemSection;