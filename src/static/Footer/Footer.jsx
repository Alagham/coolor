import "./Footer.css"

const Footer = () => {
    return (  
       <div className="Footer">
           <div className="Footer-content">
                <ul>
                    <h2 className="footer-h2">Tools</h2>
                   <li><a href="">Generate your palettes</a></li>
                   <li><a href="">Explore popular palettes</a></li>
                   <li><a href="">Extract palette from image</a></li>
                   <li><a href="">Contrast checker</a></li>
                   <li><a href="">Preview palettes on designs</a></li>
                   <li><a href="">Recolor your own design</a></li>
                   <li><a href="">Color picker</a></li>
                   <li><a href="">Browse free fonts</a></li> 
                </ul>
                <ul>
                    <h2 >More</h2>
                   <li><a href="">List of colors</a></li>
                   <li><a href="">Browse gradients</a></li>
                   <li><a href="">Create a gradient</a></li>
                   <li><a href="">Make a gradient palette</a></li>
                   <li><a href="">Image converter</a></li>
                   <li><a href="">Create a collage</a></li>
                   <li><a href="">Font Generator</a></li>
                </ul>
                <div>
                    <ul>
                        <h2>Jobs</h2>
                        <li><a href="">Find your next job</a></li>
                        <li><a href="">Post a job</a></li>
                    </ul>
                    <ul className="Apps">
                        <h2>Apps</h2>
                        <li><a href="">IOS App</a></li>
                        <li><a href="">Android App</a></li>
                        <li><a href="">Figma Plugin</a></li>
                        <li><a href="">Adobe Extension</a></li>
                        <li><a href="">Chrome Extension</a></li>
                        <li><a href="">Instagram Page</a></li> 
                    </ul>
                </div>
                <ul>
                    <h2>Company</h2>
                   <li><a href="">Pricing</a></li>
                   <li><a href="">License</a></li>
                   <li><a href="">Terms of service</a></li>
                   <li><a href="">Privacy policy</a></li>
                   <li><a href="">Cookie policy</a></li>
                   <li><a href="">Manage cookies</a></li>
                   <li><a href="">Help center</a></li>
                   <li><a href="">Advertise</a></li> 
                   <li><a href="">Affliate</a></li>
                   <li><a href="">Contact</a></li> 
                </ul>
           </div>
           <p id="Footer-p"> Coolors by <span style={{color:"black", fontWeight:"bold"}}>Halal Hustler.</span> From a creative to all the others.</p>
       </div>
    );
}
 
export default Footer;




