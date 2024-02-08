import React from "react"
import FadeIn from './fadeIn'
import { ProjectProgressWrap, ProjectProgressFlex, Numbering, VerticalAlign, ProjectProgressImgFlex } from "./style"
import { Slide } from "react-awesome-reveal"

const Contact = () => {
    return(
        <React.Fragment>
            <FadeIn>
                <div className="contact">
                    <h3 className="little-text-head mt-[8rem] sm:mt-[15rem] mb-[5rem]">Work Experiences</h3>
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
                                                            className='w-[70px]'
                                                        />
                                                    </Numbering>
                                                    {
                                                        index + 1 !== jobs.length &&
                                                            <VerticalAlign></VerticalAlign>
                                                    }
                                                </div>
                                                <div className="w-[85%] pt-1 pb-[10px] sm:w-[70%]">
                                                    <p className='text-[18px] font-bold text-[#fff] mb-[5px]'>{item.name}</p>
                                                    {/* Image Flex */}
                                                    {
                                                        item.texts && item.texts.map((item, index) => (
                                                            <p className='text-[11px] sm:text-[13px] mb-[15px] sm:mb-[5px]'>● {item}</p>
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
                                                <p className='w-[30px] text-[8px] sm:text-[14px] sm:w-[auto]'>{item.date}</p>
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
            "Started developing contribuild as a gig for a probation that was meant to last a month but got converted to a full time role the following week as a senior front end engineer",
            "Started developing the Qshelter platform with other engineers making into reality and actualizing a lot of features in a very short period of time",
            "The platform boasted about 100 thousand visits and 90% retain rate in a month",
            "Developed the Mofi housing Platform basic MVP in 15 days with other engineers in a very dedicated sprint."
        ],
        icons: "/icons/Quickshelter.png",
        date: 'Sep 2023 - Till date',
        status: 'Pending',
        images: []
    },

    {
        name: "Mage Inc",
        texts: [
            "Developed the organization's landing page and fixed existing bugs in the first week.",
            "Developed and worked on Creator Store where audiences can see and buy creator’s products thereby having about 600+ users signing up with 80% user retain rate ",
            "Developed and worked on Creator Dashboard where creators can track their progress, Orders, Merches, Customers, etc",
            "Built along the payment infrastructure like Wallet, checkouts for creators to make their money easily and directly on the platform",
            "Created other important features like Split payment for creators to split money effectively in percentage or fixed amount shares with their sub-ordinates based on earnings on the platform",
            "Developed a Virtual card for creators to make seamless payment through their wallet and the built virtual card"
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
            "Setup the production application with CICD and deployed the application and the performance of the app was averaged at 95%.",
            "Developed the Business platform (B2B) for merchants to process various actions and activities like payments, invoices with their clients and sub-businesses"
        ],
        icons: "/icons/reef.png",
        date: 'Dec 2022 - Aug 2023',
        status: 'On-going',
        images: []
    },
    {
        name: "Tryortho (Contract)",
        texts: [
            "Integrated up to 50 payment and fintech platform’s web SDK into TryOrtho between 3 weeks.",
            "Worked on the organization’s landing page and achieved the set goal in the last part of the contract.",
        ],
        icons: "/icons/ortho.jpeg",
        date: 'May 2022 - Jul 2022',
        status: 'On-going',
        images: []
    },
    {
        name: "Kpie Technologies (Freelancer)",
        texts: [
            "Got a briefing from the CTO and work ethics. Developed PPMI Website as first task and submitted 3 days before deadline.",
            "Evaluated MultiGrid Limited website and edited to meet UX standard.",
            "Developed Hua Ou Brick Website and worked hand in hand with the back end developer to make the project reality.",
            "Filled the content of the Old English Bar Website and made ready for production.",
            "Developed SellMega from the very scratch and observed UX Rules towards an effective E-Commerce market.",
            "Created SafeScout, a Reporting App that makes work efficient between Employees and Employers. Worked in a team of three also consisting of two Back End Developers.",
            "Added new features to LUZO TV and created a nice advert for downloading the Native Mobile Apps."
        ],
        icons: "/icons/kpie.jpeg",
        date: 'Feb 2020 - Oct 2021',
        status: 'On-going',
        images: []
    },
]