import './../Styles/globalStyles.css';
import { Helmet } from 'react-helmet';
import JumboText from './../Components/JumboText';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import WhoAreWe from '../Components/WhoAreWe';
import ContactUs from '../Components/ContactUs';

const HomePage = () => {
    return (
        <div className='overflow-x-hidden'>
            <Helmet>
                <title>Team Manipal Racing</title>
                <meta name='description' content='The official website of Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content='https://teammanipalracing.com/' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.com/" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Home | Team Manipal Racing"
                />
                <meta
                  property="og:description"
                  content="The official website of Team Manipal Racing"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing/' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='Home | Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content="The official website of Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div 
              style={{ 
                  backgroundImage:'url(https://live.staticflickr.com/65535/51257670217_a37913f03d.jpg)',  
                  height: '100vh',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundAttachment:'fixed'
              }}
            >                    
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.866)' }}>
                <NavBar />
                <JumboText />
              </div>    
              </div>
              <div style={{ height: 'auto' }}>
                  <WhoAreWe />
              </div>
              <div style={{ height: 'auto' }}>
                <ContactUs />
              </div>            
            <Footer />
        </div>
    );
}

export default HomePage;