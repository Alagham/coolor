import "./Companies.css"
import Disney from "../../assets/disney.svg"
import Dreamworks from "../../assets/dreamworks.svg"
import Warner from "../../assets/warner-bros.svg"
import Netflix from "../../assets/netflix.svg"
import Airbnb from "../../assets/airbnb.svg"
import Dropbox from "../../assets/dropbox.svg"
import Hasbro from "../../assets/Hasbro.png"
import Ubisoft from "../../assets/ubisoft.svg"
import EA from "../../assets/ea.svg"
import Apple from "../../assets/apple.svg"
import Window from "../../assets/windows.png"

const Comps = () => {
    return ( 
        <div className="comp-details">
            <div>
                <p id="comps-p">Used by 5+ million designers and by top companies</p>
            </div>
            <div className="companyimg">
                <div className="comp-img">
                    <img src={Disney} alt="" />
                    <img src={Dreamworks} alt="" />
                    <img src={Warner} alt="" />
                    <img src={Netflix} alt="" />
                    <img src={Airbnb} alt="" />
                    <img src={Dropbox} alt="" />
                    <img src={Hasbro} alt="" />
                    <img src={Ubisoft} alt="" />
                    <img src={EA} alt="" />
                    <img src={Apple} alt="" />
                    <img src={Window} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Comps;