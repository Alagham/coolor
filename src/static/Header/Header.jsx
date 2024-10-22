import "./Header.css"
import Button from "../../components/Buttons/button"
import Image from "../../assets/logo-img.svg"
const Header = () => {
    return ( 
        <header>
            <navleft>
                <img src={Image} alt="" />
            </navleft>
            <navright>
                <anchor>
                    <a id="Tools" href="">Tools</a>
                    <a id="Go-pro" href="">Go Pro</a>
                </anchor>
                <var> </var>
               <buttons>
                    <Button/>  
               </buttons>
            </navright>
        </header>
     );
}
 
export default Header;