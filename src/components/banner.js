import React from "react";

const Banner = () => {
    return(
        <React.Fragment>
            <div className="banner flex centralized-v"> 
                <div className="banner-text">
                    <h4>Hi, I'm Daniel Priestley Adewale ☕</h4>
                    <h1>Software Engineer, Front End Developer, UI/UX Designer</h1>
                    
                    <a href="AdewaleResume.pdf" download>
                        <button>Download Resume</button>
                    </a>
                </div>
                <div className="banner-img flex centralized">
                    <video muted autoPlay>
                        <source src="video/Programmer.mp4" />
                    </video>
                    <div className="floating-circ">

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;