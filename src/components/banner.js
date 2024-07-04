import React from "react";
import FadeIn from './fadeIn'
import Lottie from 'react-lottie';
import animationData from './../developer2.json';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';

import { ArrowDownOnSquareStackIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Banner = () => {

    const width = window.innerWidth;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    const scrollToNext = () => {
        let pageHeight = window.innerHeight + 150;
        window.scrollBy(0, pageHeight);
    }


    return(
        <React.Fragment>
            <div className="banner flex items-center"> 
                <div className="banner-social">
                    <a href="https://dev.to/syntaxpriest">
                        <i className="fab fa-dev" style={{color: 'silver'}}></i>
                    </a>
                    <a href="https://twitter.com/syntaxpriest">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/syntaxpriest/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/syntaxpriest">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <Fade>
                <div className="banner-text">
                    <h4 className='text-[20px] mb-[0.5rem]'>Hi, I'm Daniel Adewale</h4>
                    <h1 className='text-[40px]'>Software Engineer, Front End Developer</h1>
                    <p
                        className='text-[14px] sm:text-[16px] text-[silver] mt-[1rem]'
                    >
                        Highly skilled Front-End Developer with over 5 years of experience. Expert in time management, project completion, and remote collaboration. Proven ability in launching new products, enhancing user experience, and maintaining stakeholder relationships.</p>
                    <a href="Daniel Adewale (Resume).pdf" download>
                        <button 
                            className="glass p-3 mt-[1.5rem] text-[#fff] flex gap-[6px] items-center mobile-btn"
                        >
                            <span>Download Resume</span>
                        </button>
                    </a>
                </div>
                </Fade>
                <Zoom>
                    <div className="banner-img flex">
                        <Lottie 
                            options={defaultOptions}
                            width={width > 728 ?  450 : 300}
                            height={450}
                        />
                    </div>
                </Zoom>
                <div 
                    className='banner-hang flex items-center justify-center glass'
                    onClick={() => scrollToNext()}
                >
                    <ChevronDownIcon className="w-5 h-5" color="var(--tertiary-bg)" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;