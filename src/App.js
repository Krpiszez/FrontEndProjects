import MyHouse from "./components/01-my-house/my-house";
import { Bananas } from "./components/01-my-house/my-house";
import Jsx1 from "./components/02-jsx/jsx1";
import Jsx2 from "./components/02-jsx/jsx2";
import Jsx3 from "./components/02-jsx/jsx3";
import Jsx4 from "./components/02-jsx/jsx4";
import Jsx5 from "./components/02-jsx/jsx5";
import Style1 from "./components/03-styles/style1";
import Style2 from "./components/03-styles/style2";
import Style3 from "./components/03-styles/style3";
import Style4 from "./components/03-styles/style4";
import DigitalClockApplication1 from "./components/04-digital-clock-application/digital-clock-app1";
import Greetings from "./components/05-props/01-greetings";
import DigitalClockApplication2 from "./components/06-digital-clock-application2/06-digital-clock-application2";
import Images1 from "./components/07-images/01-images";
import ImageGallery from "./components/07-images/02-image-gallery";
import ProfileCard from "./components/08-profile-card/profile-card";
import BootstrapClassical from "./components/09-bootstrap/Bootstrapclassical";
import BootstrapDynamical from "./components/09-bootstrap/bootstrap-dynamical";
import MaterialIcons from "./components/10-icons/material-icons";
import ReactIcons from "./components/10-icons/react-icons";
import Event from "./components/11-events/events";
import State1 from "./components/12-state/01-state";
import Impl1 from "./components/implementation/impl1";

const App = () => {
    return (
        <div className="app">
            <MyHouse />
            <Bananas />
            <br/>
            <Jsx1 />
            <br/>
            <Jsx2 />
            <br/>
            <Jsx3 />
            <br/>
            <Jsx4 />
            <br/>
            <Jsx5 />
            <br/>
            <Jsx5>
            </Jsx5>
            <br/>
            <Style1 />
            <br/>
            <Style2 />
            <br/>
            <Style3 />
            <br/>
            <Style4 />
            <br/>
            <DigitalClockApplication1 />
            <br/>
            <Greetings />
            <br/>
            <Impl1 />
            <br/>
            <DigitalClockApplication2
                textColor="white"
                bgColor="red"
            />
            <br/>
            <DigitalClockApplication2
                textColor="white"
                bgColor="blue"
            />
            <br/>
            <Images1/>
            <br/>
            <ImageGallery/>
            <br/>
            <ProfileCard
                name = "Walker"
                image = "profile-card.jpg"
                location = "Nashville, Tennesse"
                shot = "2"
                followers = "234"
                following = "327"            
            />
            <br/>
            <BootstrapClassical/>
            <br/>
            <BootstrapDynamical/>
            <br/>
            <ReactIcons/>
            <br/>
            <MaterialIcons/>
            <br/>
            <Event/>
            <br/>
            <State1/>
            <br/>
        </div>
    )
};

export default App;