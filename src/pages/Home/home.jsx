import "./home.css"
import Hero from "../../components/Hero/hero"
import Appli from "../../components/Appli/appli"
import Comps from "../../components/Companies/companies"
const Home = () => {
   return ( 
      <div className="Home">
         <Hero/>
         <Appli/>
         <Comps/>
      </div>
   );
}
 
export default Home;