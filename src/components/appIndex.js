import React, {useRef, useState, useEffect} from "react";
import Banner from "./banner";
import AppHeader from "./header"
import About from "./about";
import Project from "./projects";
import Reviews from "./reviews";
import Footer from "./footer";
import Contact from "./contact";
import Lottie from 'react-lottie';
import animationData from './../loading.json';

const AppIndex = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <React.Fragment>

                {loading ? (
                        <div className="animation_widget Lottie_display">
                            <Lottie 
                                options={defaultOptions}
                                height={400}
                                width={400}
                            />
                        </div> )
                        
                        :

                        <React.Fragment>
                            <AppHeader />
                            <div className="breadcrumb-area">
                                <Banner />
                                <Contact />
                                <About />
                                <Project />
                                <Reviews />
                            </div>
                            <Footer />
                        </React.Fragment>
            }
        </React.Fragment>
    )
} 

export default AppIndex;