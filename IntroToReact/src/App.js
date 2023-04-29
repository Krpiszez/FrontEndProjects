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
import State2 from "./components/12-state/02-state";
import Birthday from "./components/13-birthday/birthday";
import UseEffect01 from "./components/14-useeffect/01-use-effect";
import { Counter2 } from "./components/14-useeffect/02-use-effect";
import DigitalClockApplication3 from "./components/15-digital-clock-application3/15-digital-clock-application3";
import FilterList from "./components/16-filter-list/filter-list";
import NextInput from "./components/17-useref/02-next-input";
import UseRefHook from "./components/17-useref/useref";
import ClassTypeComponent from "./components/18-class-type-component/class-type-components";
import FunctionTypeComponent from "./components/18-class-type-component/function-type-component";
import UserCards from "./components/19-fetch/user-cards";
import Countries from "./components/20-axios/countries";
import ParentComponent from "./components/21-lifting-state/parent-component";
import Form1 from "./components/22-forms/Form1";
import Form2 from "./components/22-forms/Form2";
import Form3 from "./components/22-forms/Form3";
import ProgressBar from "./components/implementation/ProgressBar";
import Impl1 from "./components/implementation/impl1";

const App = () => {
    const conditionalRender = true;
    const conditionalRender2 = true;
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
            <State2/>
            <br/>
            <Birthday/>
            <br/>
            <ProgressBar/>
            <br/>
            {
                conditionalRender &&  <UseEffect01 name="Omar"/>
            }
            {/* <UseEffect01/> */}
            <br/>
            <Counter2/>
            <br/>
            <DigitalClockApplication3
            textColor="white"
            bgColor="purple"
            />
            <br/>
            <FilterList/>
            <br/>
            <UseRefHook/>
            <br/>
            <NextInput/>
            <br/>
            {
                conditionalRender2 && <ClassTypeComponent car={"BMW"}/>
            }
            <br/>
            {
                conditionalRender2 && <FunctionTypeComponent car={"BMW"}/>
            }
            
            <br/>
            <UserCards/>
            <br/>
            <Countries/>
            <br/>
            <ParentComponent/>
            <br/>
            <Form1/>
            <br/>
            <Form2/>
            <br/>
            <Form3/>
            <br/>
        </div>
    )
};

export default App;