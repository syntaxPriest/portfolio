import React from "react";
import FadeIn from './fadeIn'
import Lottie from 'react-lottie';
import animationData from './../developer2.json';
import { Bounce, Fade, Zoom } from 'react-awesome-reveal';

import { ArrowDownOnSquareStackIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Banner = () => {

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
                    <a href="https://facebook.com/toyin.ranti.7">
                        <i className="fab fa-facebook-square"></i>
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
                    <h1 className='text-[40px]'>Front End Developer</h1>
                    <p
                        className='text-[16px] text-[silver]'
                    >
                        I am a multifaceted professional with a passion for crafting functional and visually engaging web applications and I stand out for my top development skills but I am much more than that. I am a genuine strategic business partner and a good one to work with.</p>
                    <a href="DanielResume.pdf" download>
                        <button 
                            className="glass p-3 mt-[1.5rem] text-[#fff] flex gap-[6px] items-center"
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
                            width={450}
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