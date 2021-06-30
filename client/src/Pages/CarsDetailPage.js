import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CarsDetailPage = () => {

    const { version } = useParams(); 

    // creates a clean title from the parameter
    const cleanVersion = () => {
        let cleanVersion = version.split('');
        cleanVersion[0] = cleanVersion[0].toUpperCase();
        cleanVersion.splice(7,1);
        return cleanVersion.join('');
    }

    return (
        <div>
            <Helmet>
                <title> {cleanVersion()} | Team Manipal Racing</title>
                <meta name='description' content='All the cars ever fabricated by Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content={`https://teammanipalracing/cars/${version}`} />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href={`https://teammanipalracing/cars/${version}`} />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content={`${cleanVersion()} | Team Manipal Racing`}
                />
                <meta
                  property="og:description"
                  content={`${cleanVersion()} created by Team Manipal Racing`}
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content={`https://teammanipalracing/cars/${version}`} />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content={`${cleanVersion()} | Team Manipal Racing`}
                />
                <meta
                  name="twitter:description"
                  content={`${cleanVersion()} created by Team Manipal Racing`}
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <p>{ version }</p>
        </div>
    );
}

export default CarsDetailPage;