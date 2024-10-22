
import "./appcard.css"

function AppCard({logo, appName, appContent,Popup, Styles }) {
  return (
    <div className={`Appcontent ${Styles}`}>
      <img id="Appimg" src={logo} alt={appName} />
      <h2>{appName}</h2>
      <p id="appcontent">{appContent}</p>
      <h2 className="hoverText">{Popup}</h2>
    </div>
  );
}

export default AppCard;
