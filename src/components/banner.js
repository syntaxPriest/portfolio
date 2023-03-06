import React from "react";
import FadeIn from './fadeIn'
import Lottie from 'react-lottie';
import animationData from './../developer2.json';

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
            <FadeIn>
                <div className="banner flex centralized-v"> 
                    <div className="banner-text">
                        <h4>Hi, I'm Daniel Priestley Adewale ☕</h4>
                        <h1>Software Engineer, Front End Developer, Mobile Developer</h1>
                        
                        <a href="DanielResume.pdf" download>
                            <button>Download Resume</button>
                        </a>
                    </div>
                    <div className="banner-img flex centralized">
                        <Lottie 
                            options={defaultOptions}
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Banner;