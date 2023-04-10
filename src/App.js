import MyHouse from "./components/01-my-house/my-house";
import { Bananas } from "./components/01-my-house/my-house";
import Jsx1 from "./components/02-jsx/jsx1";
import Jsx2 from "./components/02-jsx/jsx2";

const App = () => {
    return (
        <div className="app">
            <MyHouse />
            <Bananas />
            <Jsx1 />
            <Jsx2 />
        </div>
    )
};

export default App;