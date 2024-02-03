import React from "react";
import { WidgetsRounded } from "@material-ui/icons";
import { GitHub, LinkedIn, Twitter, LocalPhone, MailOutline, Code, Brush } from "@material-ui/icons";
import FadeIn from './fadeIn'
import * as Icon from 'react-feather';
import { Slide, Zoom } from "react-awesome-reveal";

const About = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="about">
                    {/* <h3>WHAT DO I DO?</h3> */}
                    <h3 className="little-text-head mt-[15rem] mb-[5rem]">About Me</h3>
                    <div className="flex centralized-v gap-[30px]">
                        <Zoom>
                            <DevWidget />
                        </Zoom>
                        <div className="about-right">
                            <Slide
                                direction="right"
                            >
                                <DevCards 
                                    headText=""
                                    bodyText="Daniel Adewale, A front End Developer and Mobile Developer with at least 5 years of experience. I am cool-headed, a Nerd, fast learner and also the lover of growth of others."
                                />
                            </Slide>
                            <Slide
                                // delay={1000}
                                direction="right"
                            >
                                <DevCards 
                                    headText=""
                                    bodyText="Through my custom Agile development method, I bring your web app ideas (Social Media Network, Business Websites, Landing pages, complex Web Apps) to reality . I stand out for my top development skills but I am much more than that. I am a genuine strategic business partner and a good one to work with."
                                />
                            </Slide>
                        </div>
                    </div>
                    <h3 className="little-text-head mt-[15rem] mb-[5rem]">My Skills</h3>
                    <div
                        style={{
                            width: '100%'
                        }}
                    >
                        <div 
                            className="techArray"
                            style={{
                                width: '100%'
                            }}
                        >
                            {
                                TechList.map((item, index) => 
                                <Slide
                                    direction='right'
                                >
                                    <Techs 
                                        key={item.id} 
                                        iconName={item.icon}
                                        techName={item.name}
                                        link={item.link} 
                                        nameDisplay={item.nameDisplay}
                                        proficiency={item.proficiency}
                                    />
                                </Slide>
                            )
                            }
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
                        src="images/adewale-coder.jpg"
                        alt='Daniel Adewale'
                    />
                    {/* {
                        social.map((item) => 
                            <Techs 
                                key={item.id} 
                                iconName={item.icon}
                                techName={item.name} 
                                link={item.link}
                                nameDisplay={item.nameDisplay}
                            />
                    )} */}
                </div>
            </div>
        </React.Fragment>
    )
}

export const Techs = ({iconName, link, techName, nameDisplay, proficiency}) => {

    return(
        <React.Fragment>
            <div className="techArray-item">
                <div>
                    {
                        iconName ?
                            <>
                                <img
                                    src={iconName}
                                    className='h-[100px]'
                                />
                            </>
                        : null   
                    }
                    <h4>{techName}</h4>
                    <section className='flex gap-[2px]'>
                        {
                            Array(8).fill("").map((item, index) => (
                                <section 
                                    className={"w-[5px] h-[5px] rounded-[20px]"}
                                    style={{
                                        background: index + 1 <= proficiency + 3 ? "gold" : "silver",
                                        borderRadius: index + 1 <= proficiency ? "1px solid gold" : "1px solid silver",
                                    }}
                                ></section>
                            ))
                        }
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}

export const social = [
    {
        id: '1',
        name: 'Github',
        icon: GitHub,
        link: 'https://github.com/syntaxPriest',
        nameDisplay: true,
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
        icon: '/icons/html.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "2",
        name: "CSS",
        icon: '/icons/css.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "3",
        name: "Javascript",
        icon: '/icons/js.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "12",
        name: "Typescript",
        icon: '/icons/ts.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "13",
        name: "NextJs",
        icon: '/icons/next.png',
        nameDisplay: true,
        proficiency: 4
    },
    {
        id: "4",
        name: "React",
        icon: '/icons/react.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "5",
        name: "Redux",
        icon: '/icons/redux.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "6",
        name: "Tailwind",
        icon: '/icons/tailwind.png',
        nameDisplay: true,
        proficiency: 4
    },
    {
        id: "7",
        name: "Figma",
        icon: '/icons/figma.png',
        nameDisplay: true,
        proficiency: 3
    },
    {
        id: "8",
        name: "Native",
        icon: '/icons/Reactnative.png',
        nameDisplay: true,
        proficiency: 3
    },
    {
        id: "9",
        name: "NodeJs",
        icon: '/icons/nodejs.png',
        nameDisplay: true,
        proficiency: 3
    },
    {
        id: "16",
        name: "Firebase",
        icon: '/icons/firebase.png',
        nameDisplay: true,
        proficiency: 4
    },
    {
        id: "10",
        name: "SASS",
        icon: '/icons/sass.png',
        nameDisplay: true,
        proficiency: 4
    },
    {
        id: "11",
        name: "Git & CICD",
        icon: '/icons/git.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "14",
        name: "React Query",
        icon: '/icons/Reactquery.png',
        nameDisplay: true,
        proficiency: 5
    },
    {
        id: "15",
        name: "DSA",
        icon: '/icons/dsa.png',
        nameDisplay: true,
        proficiency: 5
    },
]