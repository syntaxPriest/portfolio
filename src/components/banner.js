import React from "react";
import FadeIn from './fadeIn'
import Lottie from 'react-lottie';
import animationData from './../developer2.json';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';

const Banner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <React.Fragment>
            <div className="banner flex items-center"> 
                <Fade>
                <div className="banner-text">
                    <h4 className='text-[20px] mb-[0.5rem]'>Hi, I'm Daniel Adewale</h4>
                    <h1 className='text-[40px]'>Software Developer, Senior Front End Developer, Mobile Developer</h1>
                    <a href="DanielResume.pdf" download>
                        <button className="glass p-3 mt-[1.5rem] text-[#fff]">Download Resume</button>
                    </a>
                </div>
                </Fade>
                <Zoom>
                    <div className="banner-img flex">
                        <Lottie 
                            options={defaultOptions}
                            width={500}
                            height={500}
                        />
                    </div>
                </Zoom>
            </div>
        </React.Fragment>
    )
}

export default Banner;