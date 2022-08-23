import React, {useState, useEffect} from "react";
import Banner from "./banner";
import AppHeader from "./header"
import About from "./about";
import Project from "./projects";
import Reviews from "./reviews";
import Footer from "./footer";
import Contact from "./contact";

const AppIndex = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return(
        <React.Fragment>

                {loading ? (
                        <div className="animation_widget">
                        <img 
                            src='images/animate.gif'
                            alt='Animated'
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