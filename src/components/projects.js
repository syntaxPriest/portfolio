import React from "react"
import { Zoom } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Project = () => {
    return(
        <React.Fragment>
            <div className="projects">
                <h3 className="little-text-head mt-[6rem] mb-[5rem]">Projects</h3>
                <div className="project-main">
                    {
                        projectList.map((item, index) => 
                            <Zoom
                                key={item.id} 
                                cascade
                            >
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <ProjectCard 
                                        index={index}
                                        name={item.name} 
                                        img={item.img} 
                                        desc={item.desc}
                                        link={item.link} 
                                        stacks={item.stacks}
                                    />
                                </a>
                            </Zoom>
                            )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;

export const ProjectCard = ({name, desc, img, link, index, stacks}) => {
    return(
        <React.Fragment>
            <div className={"project-lone"}>
                <img src={img} alt={name} />
                <div>
                    <div>
                        <div className='flex gap-[6px] items-center flex-wrap mb-[9px] mobile-sp'>
                            {
                                stacks && stacks.map((item, index) => (
                                    <div className='py-[4px] px-3 rounded-[80px] text-[13px] text-[#161616] bg-[gold]'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                        <h3>{name}</h3>
                        <p>{desc}</p>
                        {/* <button>
                            <a href={link} target="_blank" rel='noreferrer'>
                                Navigate to Website
                            </a>
                        </button> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const projectList = [
    {
        id:"90",
        name:"Ministry of Finance Incorporated Housing Website",
        desc:"A website for the ministry of finance, Nigeria in purpose of the housing projects for over 1 million Nigerians.",
        img:"images/mofi2.png",
        link:"https://mreif.qshelter.ng",
        stacks: ["NextJs", "Tailwind", "Typescript", "Redux", "Styled-component", "REST API"]
    },
    {
        id:"1",
        name:"RenewedHope Housing Platform",
        desc:"An application built to make the dream of owning a home a reality for Nigerians. Users can select units and pay with different methods",
        img:"images/rh.png",
        link:"https://renewedhopehomes.fmhud.gov.ng/properties/search",
        stacks: ["NextJs", "Typescript", "Redux", "REST API", "Tailwind CSS", "GraphQL", "Styled Component",]
    },
    {
        id:"1",
        name:"Mage",
        desc:"Mage is a platform for creative businesses to manage payments, expenses, and access funding for their projects.",
        img:"images/mage.png",
        link:"https://trymage.com",
        stacks: ["React", "NextJs", "Typescript", "Redux", "Styled Component", "REST API", "WebSocket", "Firebase"]
    },
    {
        id:"1",
        name:"Contribuild",
        desc:"A platform to find the property of your dreams and start saving towards owning it!",
        img:"images/contribuild.png",
        link:"https://contribuild.netlify.app",
        stacks: ["React", "Typescript", "Redux", "Styled Component", "REST API", "Tailwind"]
    },
    {
        id:"20",
        name:"Video Streaming App",
        desc:"Front end design implementation for a video stream website.",
        img:"images/video.png",
        link:"https://vid-react.netlify.app",
        stacks: ["React", "Tailwind", "Javascript", "CSS"]
    },
    {
        id:"90",
        name:"Multigrid Limited",
        desc:"A platform for an organization with a primary dedication in serving with architechture, contruction and engineering services.",
        img:"images/multigrid.png",
        link:"https://multigridlimited.com",
        stacks: ["HTML", "Javascript", "CSS", "REST API"]
    },
    {
        id:"92",
        name:"The Metropolian Club Management System",
        desc:"A back-office management system for The Metropolian Club, ",
        img:"images/tmc.png",
        link:"",
        stacks: ["React", "Javascript", "Typescript", "Tailwind CSS", "React Query"]
    },
    {
        id:"90",
        name:"Otayemi Law Firm Website",
        desc:"A website for Otayemi Law firm, a team of dedicated lawyers with expertise in different fields of legal practice, working together to give timeless advice and solutions to your legal worries.",
        img:"images/law.jpg",
        link:"https://otaillaw.netlify.app",
        stacks: ["HTML", "CSS", "Javascript"]
    },
    {
        id:"90",
        name:"Hua Ou Clay Bricks",
        desc:"A platform for a construction company that evaluate and sells bricks to clients for their construction needs in Nigeria.",
        img:"images/huaoy.png",
        link:"https://huaouclaybricks.com/",
        stacks: ["HTML", "Javascript", "CSS", "REST API"]
    },
    {
        id:"5",
        name:"Arata BlockChain Application (UI)",
        desc:"A blockchain interface for a blockchain and Web3 company",
        img:"images/art.jpg",
        link:"https://aarata.netlify.app",
        stacks: ["React", "Tailwind", "Javascript", "CSS"]
    },
    {
        id:"1",
        name:"Edulens",
        desc:"Edulens is an EdTech StartUp Project which helps students learn.",
        img:"images/Edulens Homepage.png",
        link:"https://edulens.netlify.app",
        stacks: ["React", "Javascript", "Redux", "CSS", "REST API", "WebSocket", "Figma"]
    },
    {
        id:"9",
        name:"Music Player",
        desc:"You won't believe but this is my first Mockup with Figma; A Music Player 😁",
        img:"images/Duo Music App.png",
        link:"https://www.figma.com/file/A2MBKfyHxOtAENHQcWlYtL/Untitled",
        stacks: ["Figma"]
    },
    {
        id:"8",
        name:"Scientific Calculator",
        desc:"Created a Scientific Calculator on a free day trying out some Neomorphic design.",
        img:"images/calc.png",
        link:"#",
        stacks: ["HTML", "CSS", "Javascript"]
    },
]