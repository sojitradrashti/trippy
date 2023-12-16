import Navbar from "../component/Navbar";
import Hero from "../component/Hero";

function Service(){
    return(
        <>
         <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="assets/night.jpg"
        title="Service"
        // buttonText="Travel Plan"
        url="/"
        btnClass="hide"

        />
        </>
    )
}

export default Service