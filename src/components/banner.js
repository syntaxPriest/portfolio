import React from "react";

const Banner = () => {
    return(
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Banner;