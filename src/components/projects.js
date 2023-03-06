import React from "react"
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
                <h3 className="dev-widget">My Web Projects and Recent Designs</h3>
                <div className="project-main">
                    {
                        projectList.map((item, index) => 
                            <ProjectCard 
                                key={item.id} 
                                index={index}
                                name={item.name} 
                                img={item.img} 
                                desc={item.desc}
                                link={item.link} 
                            />
                            )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Project;

export const ProjectCard = ({name, desc, img, link, index}) => {
    return(
        <React.Fragment>
            <div className={index % 2 === 1 ? "project-lone reversed" : 'project-lone'}>
                <img src={img} alt={name} />
                <div>
                    <div>
                        <h3>{name}</h3>
                        <p>{desc}</p>
                        <button>
                            <a href={link} target="_blank" rel='noreferrer'>
                                Navigate to Website
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const projectList = [
    {
        id:"1",
        name:"Edulens",
        desc:"Edulens is an EdTech StartUp Project which helps students learn.",
        img:"images/education-sector.png",
        link:"https://edulens.netlify.app"
    },
    {
        id:"90",
        name:"Otayemi Law Firm Website",
        desc:"A website for Otayemi Law firm, a team of dedicated lawyers with expertise in different fields of legal practice, working together to give timeless advice and solutions to your legal worries.",
        img:"images/law.jpg",
        link:"https://otaillaw.netlify.app"
    },
    {
        id:"7",
        name:"FormPlus Task",
        desc:"A task to test large volume of data and aesthetic design for an organization that builds form based applications.",
        img:"images/resume.jpeg",
        link:"https://formplus-adewale.netlify.app"
    },
    {
        id:"2",
        name:"SellMega E-commerce Application",
        desc:"A Full E-commerce website with aesthetic User Interface",
        img:"images/e-commerce.png",
        link:"https://adewaleSellMega.netlify.app"
    },
    {
        id:"20",
        name:"Video Streaming App",
        desc:"Front end design implementation for a video stream website.",
        img:"images/streaming.webp",
        link:"https://vid-react.vercel.app"
    },
    {
        id:"9",
        name:"Music Player",
        desc:"You won't believe but this is my first Mockup with Figma; A Music Player 😁",
        img:"images/Duo Music App.png",
        link:"https://www.figma.com/file/A2MBKfyHxOtAENHQcWlYtL/Untitled"
    },
    {
        id:"3",
        name:"Nudity Detection Application",
        desc:"A Nudity detection application that detects nude content and flag as 18+ content.",
        img:"images/18+.png",
        link:"https://syntaxPriest.github.io/nudity-detection/"
    },
    {
        id:"8",
        name:"Scientific Calculator",
        desc:"Created a Scientific Calculator on a busy day trying out some Neomorphic design. Looks good right?",
        img:"images/calc.png",
        link:"#"
    },
    {
        id:"10",
        name:"Edulens App Design",
        desc:"Designed the Edulens Mobile App with Figma and also achieving UX goals.",
        img:"images/Easy Life Mockup (Community).png",
        link:"#"
    },
    {
        id:"11",
        name:"Edulens Desktop Design",
        desc:"Designed the Edulens Web Application with Figma and also achieving UX goals.",
        img:"images/Edulens Homepage.png",
        link:"#"
    },
    {
        id:"4",
        name:"Agromall",
        desc:"AgroMall is a single vendor E-commerce application. Created Agromall alongisde a back-end developer for a client.",
        img:"images/farm.webp",
        link:"https://agromall.ng"
    },
    {
        id:"5",
        name:"BlockChain Application",
        desc:"A blockchain interface for a blockchain and Web3 company",
        img:"images/art.jpg",
        link:"https://aarata.netlify.app"
    },
    {
        id:"6",
        name:"Curious News",
        desc:"Created this news Platform during my learning process.",
        img:"images/news.webp",
        link:"https://curiousnews.com.ng"
    },
    
]