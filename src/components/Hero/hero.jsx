import Herobtn from "../Buttons/Herobuttons/herobuttons"
import "./hero.css"
import Heroimg from "../../assets/cup.svg"
import Hero2 from "../../assets/hero-img2.png"


const Hero = () => {
    return ( 
        <section className="soft">
            <main>
                <h1>The super fast color palettes generator!</h1>
                <p id="hero-content">Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>
                <Herobtn/>
                <img id="heroimg" src={Heroimg} alt="" />
            </main>
            <mainright>
                <img id="hero2" src={Hero2} alt="" />
            </mainright>
        </section>
       
     );
}
 
export default Hero ;