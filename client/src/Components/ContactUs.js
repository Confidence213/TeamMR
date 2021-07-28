import React, { useEffect } from 'react';
import AOS from 'aos';

const ContactUs = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
    }, []);

    return (
        <div style={{ marginBottom: '10rem' }}>
            <h1 className='text-center font-staatliches gradient-heading mb-20 pb-20' style={{ color:'#EC7B4D', fontSize:'6rem', marginTop: '10rem' }}>GET IN TOUCH</h1>
            <div className='row h-full w-three-quarter container-fluid'>
                <div data-aos='fade-left' className='col-md-6 col-12 d-flex justify-content-md-end justify-content-center align-items-center text-white mb-20 mb-md-0'>
                    <iframe
                      src='https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?zoomwheel=false&Arial%20Unicode%20MS%20Regular/0-255.pbf?&access_token=pk.eyJ1IjoidGhlcHJvdG9uMjUiLCJhIjoiY2txdjAwdXFwMDlvbjJvbzZrNGJsYjBxeSJ9.cMvYXpGi2feyvpgpvaqLkg#15/13.3525321/74.7928224' 
                      className='w-full w-md-450 h-500 h-md-full' title='TMR Location'>
                    </iframe>  
                </div>
                <div data-aos='fade-right' className='col-md-6 col-12 d-flex justify-content-md-start justify-content-center align-items-center '>
                    <div style={{ backgroundColor:'white', filter: 'grayscale(80%)', backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxJzNQpraqZ_OjUqBmzylS7IHitv3Rdm5qVtvQ_0SrdJIaWQEbcJG_NoCj34zFhWlQDs&usqp=CAU)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='container-fluid p-15' style={{ backdropFilter: 'blur(10px)' }}>
                            <form className="w-md-400 w-full m-auto">
                                <h1 className='font-staatliches m-0 text-white' style={{ fontSize:'4.5rem' }}>
                                    LET US KNOW
                                </h1>
                                <h2 className='font-fira-sans m-0 text-light' style={{ color:'#222222', fontSize:'1.6rem' }}>
                                    REACH OUT TO US ON <span className='font-weight-bold'>EMAILID@EXAMPLE.COM</span>
                                </h2>
                                <div className='form-group mt-20'>
                                    <label for="full-name" style={{color:'#efefef', fontSize:'1.7rem'}} className='font-staatliches m-0'>Full name</label>
                                    <input type='text' placeholder='How do we know you?' autoComplete='off' className='form-control bg-transparent font-fira-sans' id="full-name" required style={{ border: '2px solid grey' }}/>
                                </div>
                                <div className='form-group'>
                                    <label for="email-id" style={{ color:'#efefef',fontSize:'1.7rem' }} className='font-staatliches m-0'>Email Address</label>
                                    <input type="text" placeholder='Where do we reach out to you?' autoComplete='off' className='form-control bg-transparent font-fira-sans' id="email" required style={{ border: '2px solid grey' }}/>
                                </div>
                                <div className='form-group'>
                                    <label for='description' style={{color:'#efefef', fontSize:'1.7rem'}} className='font-staatliches m-0'>Message</label>
                                    <textarea autoComplete='off' placeholder='What do you have to say to us?' required className='form-control form-control-lg bg-transparent font-fira-sans' id="description" style={{ border: '2px solid grey', resize: 'none' }}></textarea>
                                </div>
                                <input className='btn btn-md mb-15 w-full font-weight-bold' style={{ fontSize: '1.5rem', color:'black', backgroundColor:'white', borderRadius: '10px' }}  type="submit" value="SEND"/>
                            </form>
                        </div>
		            </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;