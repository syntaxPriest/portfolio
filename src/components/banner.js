import React from "react";
import FadeIn from './fadeIn'

const Banner = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="banner flex centralized-v"> 
                    <div className="banner-text">
                        <h4>Hi, I'm Daniel Priestley Adewale ☕</h4>
                        <h1>Software Engineer, Front End Developer, UI/UX Designer</h1>
                        
                        <a href="DanielResume.docx" download>
                            <button>Download Resume</button>
                        </a>
                    </div>
                    <div className="banner-img flex centralized">
                        <img 
                            src='images/animate.gif'
                            alt='Code'
                        />
                    </div>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Banner;