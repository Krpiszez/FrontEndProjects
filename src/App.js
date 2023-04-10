import MyHouse from "./components/01-my-house/my-house";
import { Bananas } from "./components/01-my-house/my-house";
import Jsx1 from "./components/02-jsx/jsx1";
import Jsx2 from "./components/02-jsx/jsx2";
import Jsx3 from "./components/02-jsx/jsx3";
import Jsx4 from "./components/02-jsx/jsx4";
import Jsx5 from "./components/02-jsx/jsx5";

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
        </div>
    )
};

export default App;