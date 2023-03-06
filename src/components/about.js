import React from "react";
import { WidgetsRounded } from "@material-ui/icons";
import { GitHub, LinkedIn, Twitter, LocalPhone, MailOutline, Code, Brush } from "@material-ui/icons";
import FadeIn from './fadeIn'
import * as Icon from 'react-feather';

const About = () => {
    return(
        <React.Fragment>
            <FadeIn>
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
            </FadeIn>
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
                        src="images/wale.jpg"
                        alt='Daniel Adewale'
                    />
                    <h3>Daniel Adewale</h3>
                    <p>Front End Developer, Mobile Developer</p>
                    <p>B.Eng Industrial Engineering (Class '24)</p>

                    {
                        social.map((item) => 
                            <Techs 
                                key={item.id} 
                                iconName={item.icon}
                                techName={item.name} 
                                link={item.link}
                                nameDisplay={item.nameDisplay}
                            />
                    )}
                </div>
                {/* <div>
                    <h3 className="little-text-head" style={{margin:"2rem 0"}}>
                            <i className="beside_icon"><WidgetsRounded /></i>
                            Technology (skills)</h3>
                    <div className="techArray">
                        {
                            TechList.map((item) => 
                            <Techs 
                                key={item.id} 
                                iconName={item.icon}
                                techName={item.name}
                                link={item.link} 
                                nameDisplay={item.nameDisplay}
                            />
                        )
                        }
                    </div>
                </div> */}
            </div>
        </React.Fragment>
    )
}

export const Techs = ({iconName, link, techName, nameDisplay}) => {

    return(
        <React.Fragment>
            <a href={link ? link : '#'} target='_blank' rel='noreferrer'>
                <div className="techArray-item">
                    <div>
                        {
                            iconName ?
                                <>
                                    <i>
                                        {
                                            React.createElement(iconName, {color:'#fff'})
                                        }
                                    </i>
                                </>
                            : null   
                        }
                        {
                            nameDisplay ?
                                <h4>
                                    {techName}
                                </h4>

                                : null
                        }
                    </div>
                    
                    
                </div>
            </a>
        </React.Fragment>
    )
}

export const social = [
    {
        id: '1',
        name: 'Github',
        icon: GitHub,
        link: 'https://github.com/syntaxPriest',
        nameDisplay: true
    },
    {
        id: '2',
        name: 'Linkedin',
        icon: LinkedIn,
        link: 'https://www.linkedin.com/in/syntaxpriest/',
        nameDisplay: true
    },
    {
        id: '3',
        name: 'Twitter',
        icon: Twitter,
        link: 'https://twitter.com/syntaxPriest',
        nameDisplay: true
    },
    {
        id: '4',
        name: 'Email',
        icon: MailOutline,
        link: 'mailto:adewaled03@gmail.com',
        nameDisplay: true
    },
    {
        id: '5',
        name: 'Phone',
        icon: LocalPhone,
        link: 'tel:08188869197',
        nameDisplay: true
    },
]
export const TechList = [
    {
        id: "1",
        name: "HTML",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "2",
        name: "CSS",
        icon: Brush,
        nameDisplay: true
    },
    {
        id: "3",
        name: "Js",
        icon: Icon.Hash,
        nameDisplay: true
    },
    {
        id: "4",
        name: "React",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "5",
        name: "Redux",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "6",
        name: "Tailwind",
        icon: Brush,
        nameDisplay: true
    },
    {
        id: "7",
        name: "Figma",
        icon: Icon.Figma,
        nameDisplay: true
    },
    {
        id: "8",
        name: "Native",
        icon: Code,
        nameDisplay: true
    },
    {
        id: "9",
        name: "Chkra UI",
        icon: Brush,
        nameDisplay: true
    },
    {
        id: "10",
        name: "SASS",
        icon: Brush,
        nameDisplay: true
    },
    {
        id: "11",
        name: "Git",
        icon: GitHub,
        nameDisplay: true
    },
    {
        id: "11",
        name: "TS",
        icon: Code,
        nameDisplay: true
    },

]