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
                            // <Zoom
                            //     key={item.id} 
                            // >
                                <ProjectCard 
                                    index={index}
                                    name={item.name} 
                                    img={item.img} 
                                    desc={item.desc}
                                    link={item.link} 
                                    stacks={item.stacks}
                                />
                            // {/* </Zoom> */}
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
                        <div className='flex gap-[6px] items-center flex-wrap mb-[9px]'>
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
        id:"1",
        name:"Mage",
        desc:"Mage is a platform for creative businesses to manage payments, expenses, and access funding for their projects.",
        img:"images/mage.png",
        link:"https://edulens.netlify.app",
        stacks: ["React", "NextJs", "Typescript", "Redux", "Styled Component", "REST API", "WebSocket", "Firebase"]
    },
    {
        id:"1",
        name:"Contribuild",
        desc:"A platform to find the property of your dreams and start saving towards owning it!",
        img:"images/contribuild.png",
        link:"https://contribuild.vercel.app",
        stacks: ["React", "Typescript", "Redux", "Styled Component", "REST API", "Tailwind"]
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
        name:"Mofi Housing Project",
        desc:"A website for Otayemi Law firm, a team of dedicated lawyers with expertise in different fields of legal practice, working together to give timeless advice and solutions to your legal worries.",
        img:"images/mofi.png",
        link:"https://mofi-dev.qshelter.ng",
        stacks: ["NextJs", "Tailwind", "Typescript", "Redux", "Styled-component", "REST API"]
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
        id:"20",
        name:"Video Streaming App",
        desc:"Front end design implementation for a video stream website.",
        img:"images/streaming.webp",
        link:"https://vid-react.vercel.app",
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
        desc:"Created a Scientific Calculator on a busy day trying out some Neomorphic design. Looks good right?",
        img:"images/calc.png",
        link:"#",
        stacks: ["HTML", "CSS", "Javascript"]
    },
    {
        id:"7",
        name:"FormPlus Task",
        desc:"A task to test large volume of data and aesthetic design for an organization that builds form based applications.",
        img:"images/resume.jpeg",
        link:"https://formplus-adewale.netlify.app",
        stacks: ["React, CSS, Javascript", "Redux"]
    },
]