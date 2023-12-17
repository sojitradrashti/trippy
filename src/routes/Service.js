import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import Trip from "../component/Trip";
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
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service