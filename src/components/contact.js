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
                                                <div className='w-[25%] h-[auto] flex flex-col items-center sm:w-[auto]'>
                                                    <Numbering>
                                                        <img 
                                                            src={item.icons ? item.icons : '/icons/react.png'}
                                                            className='w-[70px] rounded-[8px]'
                                                        />
                                                    </Numbering>
                                                            <VerticalAlign></VerticalAlign>
                                                </div>
                                                <div className="w-[70%] pt-[2px] pb-[10px] sm:w-[70%]">
                                                    <p className='text-[18px] font-bold text-[#fff] mb-[15px] sm:mb-[45px]'>{item.name}</p>
                                                    {/* Image Flex */}
                                                    {
                                                        item.texts && item.texts.map((item, index) => (
                                                            <p className='text-[12px] sm:text-[15px] mb-[15px] sm:mb-[15px] relative left-[0px] sm:left-[-20px]'>● {item}</p>
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
                                                <p className='w-[50%] sm:w-[auto] relative text-[12px] sm:text-[12px] py-[8px] px-[12px] bg-[#000000] rounded-[50px] inline-block h-[auto] sm:h-[40px] left-[90px] sm:left-[0] top-[-20px] sm:top-[0]'>{item.date}</p>
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
        date: 'Dec 2021 - Oct 2023',
        status: 'Pending',
        images: [],
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
        date: 'Nov 2019 - Oct 2021',
        status: 'On-going',
        images: []
    },
]