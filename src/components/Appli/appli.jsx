import Apple from "../../assets/apple.svg"
import Andriod from "../../assets/andriod-app.png"
import Figma from "../../assets/figma.svg"
import Chrome from "../../assets/chrome.png"
import Adope from "../../assets/adobe.png"
import AppCard from "../../components/reuseable/app-card/appcard"
import "./appli.css"

const Appli = () => {
    return ( 
        <div className="App">
            <AppCard 
                logo={Apple} 
                appName="iOS App" 
                appContent="Create, browse and save palettes on the go." 
                Styles="Styles1"
                Popup="View on the app store"
            />
    
            <AppCard 
               logo={Andriod} 
                appName="Android App" 
                appContent="Thousands of palettes in your pocket." 
                Styles="Styles2"
                Popup="View on the Play store"
            />

            <AppCard 
                logo={Figma} 
                appName="Figma Plugin" 
                appContent="All palettes right in your workspace."
                Styles="Styles3"
                Popup="Install now"
            />

            <AppCard 
                logo={Chrome} 
                appName="Chrome Extension" 
                appContent="Get and edit a palette every new tab."
                Styles="Styles4"
                Popup="Add to Chrome"
            />

            <AppCard 
                logo={Adope} 
                appName="Adobe Extension" 
                appContent="Use Coolors with your favourite tools." 
                Styles="Styles5"
                Popup="Download"
            />
        </div>
    );
}
 
export default Appli;
