import React, { useEffect } from 'react';
import AOS from 'aos';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: document.getElementById('name').value,
            to_name: "Team Manipal Racing",
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            reply_to: document.getElementById('email').value
        }

        emailjs.send('service_bggy5ik', 'template_k5gl7v6', templateParams, 'user_pjAcrfsZTEunPw9j2ZCxS')
        .then((result) => {
            document.getElementById("confirm").classList.remove("d-none");
            setTimeout(() => {
                document.getElementById("confirm").classList.add("d-none");
            }, 2000)    
        }, (error) => {
            console.log(error.text);
        });
    }

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
                            <form className="w-md-400 w-full m-auto" onSubmit={sendEmail}>
                                <h2 className='font-fira-sans mt-10 text-white' style={{ color:'#222222', fontSize:'1.6rem' }}>
                                    REACH OUT TO US ON <span className='font-weight-bold'>tmr.management@gmail.com</span>
                                </h2>
                                <div className='form-group mt-20'>
                                    <label htmlFor="full-name" style={{color:'#efefef', fontSize:'1.7rem'}} className='font-staatliches m-0'>Name</label>
                                    <input type='text' id="name" placeholder='How do we know you?' autoComplete='false' className='form-control bg-transparent text-white font-fira-sans' required style={{ border: '2px solid grey' }}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="email-id" style={{ color:'#efefef',fontSize:'1.7rem' }} className='font-staatliches m-0'>Email Address</label>
                                    <input type="text" id="email" placeholder='Where do we reach out to you?' autoComplete='false' className='form-control bg-transparent text-white font-fira-sans' required style={{ border: '2px solid grey' }}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='description' style={{color:'#efefef', fontSize:'1.7rem'}} className='font-staatliches m-0'>Message</label>
                                    <textarea autoComplete='off' id="message" placeholder='What do you have to say to us?' required className='form-control form-control-lg bg-transparent text-white font-fira-sans' style={{ border: '2px solid grey', resize: 'none', fontSize: "1.5rem" }}></textarea>
                                </div>
                                <p id="confirm" className="text-white text-center d-none">We have received your message!</p>
                                <input type="submit" className='btn btn-md mb-15 w-full font-weight-bold' style={{ fontSize: '1.5rem', color:'black', backgroundColor:'white', borderRadius: '10px' }} value="SEND"/>
                            </form>
                        </div>
		            </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;