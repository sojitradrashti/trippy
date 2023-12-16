import Navbar from "../component/Navbar";
import Hero from "../component/Hero";

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
         </>
    )
}

export default About