import React from "react";
import { WidgetsRounded } from "@material-ui/icons";

const About = () => {
    return(
        <React.Fragment>
            <div className="about">
                {/* <h3>WHAT DO I DO?</h3> */}
                <div className="flex centralized-v">
                    <DevWidget />
                    <div className="about-right">
                        <DevCards 
                            headText="Who am I?"
                            bodyText="My name is Daniel Adewale, A front End Developer and UI/UX Designer. I am cool-headed, a Nerd, fast learner and also the lover of growth of others."
                        />
                        <DevCards
                            headText="What do I do?"
                            bodyText="Through my custom Agile development method, I bring your web app ideas (Social Media Network, Business Websites, Landing pages, complex Web Apps) to reality . I stand out for my top development skills but I am much more than that. I am a genuine strategic business partner and a good one to work with."
                        />
                        <DevCards
                            headText="Experience"
                            bodyText="I have been a developer for the past three years and in the process, I have gained lot of experience past these years and also worked with different organizations which helped my growth."
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About;

export const DevCards = ({headText, bodyText}) => {
    return(
        <React.Fragment>
            <div style={{margin:" 0 0 3rem 0"}}>
                <h3  className="little-text-head">{headText}</h3>
                <p>{bodyText}</p>
            </div>
        </React.Fragment>
    )
}

export const DevWidget = () => {
    return(
        <React.Fragment>
            <div>
                <div className="dev-widget"> 
                    <img
                        src="images/daniel.jpg"
                        alt='Daniel Adewale'
                    />
                    <h3>Daniel Adewale</h3>
                    <p>Front End Developer, UI/UX Designer</p>
                    <p>B.Eng Industrial Engineering (Class '24)</p>
                    <p>Github - <a href='https://danieladewale.netlify.app'>https://danieladewale.netlify.app</a></p>
                    <p>Linkedin - <a href='https://www.linkedin.com/in/syntaxpriest/'>https://www.linkedin.com/in/syntaxpriest/</a></p>
                    <p>Twitter <a href='https://twitter.com/syntaxPriest'>https://twitter.com/syntaxPriest</a></p>
                </div>
                <div>
                    <h3 className="little-text-head" style={{margin:"2rem 0"}}>
                            <i className="beside_icon"><WidgetsRounded /></i>
                            Technology (skills)</h3>
                    <div className="techArray">
                        {
                            TechList.map((item) => 
                            <Techs 
                                key={item.id} 
                                iconName={item.icon}
                                techName={item.name} />)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export const Techs = ({iconName, techName}) => {
    return(
        <React.Fragment>
            <div className="techArray-item">
                <div>
                    <h4>{techName}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export const TechList = [
    {
        id: "1",
        name: "HTML",
        icon: ""
    },
    {
        id: "2",
        name: "CSS",
        icon: ""
    },
    {
        id: "3",
        name: "Js",
        icon: ""
    },
    {
        id: "4",
        name: "React",
        icon: ""
    },
    {
        id: "5",
        name: "Redux",
        icon: ""
    },
    {
        id: "6",
        name: "Tailwind",
        icon: ""
    },
    {
        id: "7",
        name: "Figma",
        icon: ""
    },
    {
        id: "8",
        name: "Flutter",
        icon: ""
    },
    {
        id: "9",
        name: "Chkra UI",
        icon: ""
    },
    {
        id: "10",
        name: "SASS",
        icon: ""
    },
    {
        id: "11",
        name: "Git",
        icon: ""
    },
    {
        id: "11",
        name: "TS",
        icon: ""
    },

]