import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import AboutUs from "../component/AboutUs";

function About(){
    return(
        <>
        
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="assets/night.jpg"
        title="About"
        // buttonText="Travel Plan"
        url="/"
        btnClass="hide"

        />
        <AboutUs/>
        <Footer/>
         </>
    )
}

export default About