import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubsystemSection from './SubsystemSection';
import TeamMemberCard from './TeamMemberCard';

const TeamTab = (props) => {
  
  return (
    <Tabs className='text-center w-full'>
      <TabList className="d-flex mx-auto justify-content-center">
        <Tab onClick={() => props.fetchData("mbaja")} className="d-flex align-items-center justify-content-center font-staatliches font-size-24" style={{ height: "60px", borderRadius: "10px", width: "110px", cursor: "pointer" }}>
          M BAJA
        </Tab>
        <Tab onClick={() => props.fetchData("ebaja")} className="d-flex align-items-center justify-content-center font-staatliches font-size-24" style={{ height: "60px", borderRadius: "10px", width: "110px", cursor: "pointer" }}>
          E BAJA
        </Tab>
      </TabList>
      <TabPanel>
        <div className="w-md-half mx-auto my-15 d-flex flex-md-row flex-column align-items-center justify-content-center">
          {
            props.topThree.slice(0, 2).map((top, index) => {
              return (
                <TeamMemberCard
                  key={index} 
                  data={top}  
                />
              )
            })
          }
        </div>
        <div className="w-full bg-dark" style={{ height: '2px' }}></div>
        {
          props.subs.map((sub, index) => {
            return <SubsystemSection 
              key={index}
              data={sub}
            /> 
          })
        }
      </TabPanel>
      <TabPanel>
      <div className="w-md-half mx-auto my-15 d-flex flex-md-row flex-column align-items-center justify-content-center">
          {
            props.topThree.slice(0, 2).map((top, index) => {
              return (
                <TeamMemberCard
                  key={index} 
                  data={top}  
                />
              )
            })
          }
        </div>
        {
          props.subs.map((sub, index) => {
            return <SubsystemSection 
              key={index}
              data={sub}
            /> 
          })
        }
      </TabPanel>
    </Tabs>
  );
};

export default TeamTab;