import React, { useState } from 'react';
import '../styles/Landing.css';
import Login from '../components/Login';
import Register from '../components/Register';
//import Navbar from '../components/Navbar';
// import HeroImg from '../assets/home-hero-img.png';
// import About1 from '../assets/about1.jpg';
// import About2 from '../assets/about2.jpg';

const Landing = () => {

    const [isLoginBox, setIsLoginBox] = useState(true);


  return (
    <>
    <div className='landingPage'>


        <div className="landing-body">

            <div className="landing-hero" id='home'>
                <div className="landing-hero-content">
                    <h1>Growth Equity</h1>
                    <p>The Stock Market experience made simple and hassle free!!! </p>

                    <div className="authentication-form">

                        { isLoginBox ?

                            <Login setIsLoginBox={setIsLoginBox} />
                            :
                            <Register setIsLoginBox={setIsLoginBox} />
                        }

                    </div>

                </div>


            </div>

            <div className="footer">
                <p>All rights reserved by - &#169; Growth-Equity.com</p>
            </div>


        </div>

    </div>
    </>
  )
}

export default Landing