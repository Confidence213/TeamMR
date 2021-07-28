import React from 'react';

const TeamMmberCard = () => {
    return (
        <div>
            <div style={{width:'27rem'}} > 
                <div className="card p-0" style={{borderStyle:'none', backgroundColor:'transparent'}}> 
                    <img src="sh-199.jpg" className="img-fluid rounded-circle" style={{width:'17.375rem',height:'17.375rem'}} alt="..."/> 
                    <div className="content ml-0 mt-0">
                        <h2 className="p-0" style={{color: '#EC7B4D', fontSize:'4rem', borderBottom:'4px solid #E4E4E4'}}>
                        John Doe
                        </h2>
                        <h3 className="p-0" style={{color:' #8A8A8A' ,fontSize:'3rem'}} >
                            Team Captain
                        </h3>
                        <div className="row justify-content-center ">
                            <Icon.Instagram  color= "#8A8A8A" className='mr-10' size={30}/>
                            <Icon.Linkedin color="#8A8A8A"  className='ml-10' size={30}/>
                        </div>
                        
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default TeamMmberCard;