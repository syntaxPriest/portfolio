import React from "react"
import FadeIn from './fadeIn'
import { ProjectProgressWrap, ProjectProgressFlex, Numbering, VerticalAlign, ProjectProgressImgFlex } from "./style"
import { Slide } from "react-awesome-reveal"

const Contact = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="contact">
                    <h3 className="little-text-head mt-[15rem] mb-[5rem]">Work Experiences</h3>
                    <div>
                        <ProjectProgressWrap>
                            <>
                                {
                                    jobs && jobs.map((item, index) => (
                                        <Slide
                                            direction='right'
                                            cascade
                                        >
                                            <ProjectProgressFlex
                                                key={index}
                                            >
                                                <div className='w-[auto] h-[auto] flex flex-col items-center'>
                                                    <Numbering>
                                                        <img 
                                                            src={item.icons ? item.icons : '/icons/react.png'}
                                                            className='w-[70px] '
                                                        />
                                                    </Numbering>
                                                    {
                                                        index + 1 !== jobs.length &&
                                                            <VerticalAlign></VerticalAlign>
                                                    }
                                                </div>
                                                <div className="w-[70%] pt-1 pb-[10px]">
                                                    <p className='text-[18px] font-bold text-[#fff] mb-[5px]'>{item.name}</p>
                                                    {/* Image Flex */}
                                                    {
                                                        item.texts && item.texts.map((item, index) => (
                                                            <p className='text-[13px]'>{item}</p>
                                                        ))
                                                    }
                                                    {
                                                        item.images && item.images.length > 0 &&
                                                            <ProjectProgressImgFlex>
                                                                {
                                                                    item.images.map((item, index) => (
                                                                        <img 
                                                                            key={index}
                                                                            src={item}
                                                                            alt='Projects'
                                                                        />
                                                                    ))
                                                                }
                                                            </ProjectProgressImgFlex>
                                                    }
                                                </div>
                                                <p className='text-[14px]'>{item.date}</p>
                                                {/* <StatusCard
                                                    // bg={handleBg(item.status)}
                                                    // color={handleColor(item.status)}
                                                >
                                                    {item.status}
                                                </StatusCard> */}
                                            </ProjectProgressFlex>
                                        </Slide>
                                    ))
                                }
                            </>
                        </ProjectProgressWrap>
                    </div>
                </div>
            </FadeIn>
        </React.Fragment>
    )
}

export default Contact;

const jobs = [
    {
        name: "Qshelter Limited",
        texts: [
            "Developed Reef Financial Solution Web Landing page with total responsiveness.",
            "Started Mongoro Service application from the landing page.",
            "Developed the Admin workspace and dashboard with different features.",
            "Setup the production application with CICD and deployed the application."
        ],
        icons: "/icons/Quickshelter.png",
        date: 'Sep 2023 - Till date',
        status: 'Pending',
        images: []
    },

    {
        name: "Mage Inc",
        texts: [
            "Developed Reef Financial Solution Web Landing page with total responsiveness.",
            "Started Mongoro Service application from the landing page.",
            "Developed the Admin workspace and dashboard with different features.",
            "Setup the production application with CICD and deployed the application."
        ],
        icons: "/icons/mage.svg",
        date: 'Mar 2022 - Oct 2023',
        status: 'Pending',
        images: [],
    },
    {
        name: "Reef Financial Solution Ltd (Contract)",
        texts: [
            "Developed Reef Financial Solution Web Landing page with total responsiveness.",
            "Started Mongoro Service application from the landing page.",
            "Developed the Admin workspace and dashboard with different features.",
            "Setup the production application with CICD and deployed the application."
        ],
        icons: "/icons/reef.png",
        date: 'December 2022 - August 2023',
        status: 'On-going',
        images: []
    },
    {
        name: "Tryortho (Contract)",
        texts: [
            "Developed Reef Financial Solution Web Landing page with total responsiveness.",
            "Started Mongoro Service application from the landing page.",
            "Developed the Admin workspace and dashboard with different features.",
            "Setup the production application with CICD and deployed the application."
        ],
        icons: "/icons/ortho.jpeg",
        date: 'May 2022 - July 2022',
        status: 'On-going',
        images: []
    },
    {
        name: "Kpie Technologies (Freelancer)",
        texts: [
            "Developed Reef Financial Solution Web Landing page with total responsiveness.",
            "Started Mongoro Service application from the landing page.",
            "Developed the Admin workspace and dashboard with different features.",
            "Setup the production application with CICD and deployed the application."
        ],
        icons: "/icons/kpie.jpeg",
        date: 'Feb 2020 - Oct 2021',
        status: 'On-going',
        images: []
    },
]