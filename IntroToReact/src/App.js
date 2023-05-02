import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import FormPractice1 from "./components/22-forms/FormPractice1";
import FormPractice2 from "./components/22-forms/FormPractice2";
import FormValidation from "./components/22-forms/FormValidation";
import FormikYup1 from "./components/23-formik-yup/01-formik-yup";
import FormikYup2 from "./components/23-formik-yup/02-formik-yup";
import ProgressBar from "./components/implementation/ProgressBar";
import Impl1 from "./components/implementation/impl1";
import ToDo from "./components/implementation/to-do-app";
import Header from "./components/header/Header";
import NotFound from "./components/not-found/NotFound";
import StoreContext from "./store";
import { useEffect, useState } from "react";
import axios from "axios";
import Exchange from "./components/24-context-api/Exchange";

const App = () => {
    const conditionalRender = true;
    const conditionalRender2 = true;
    const [currencies, setCurrencies] = useState([]);

    const loadData = async () => {
        try {
            const resp = await axios.get("https://api.frankfurter.app/latest?from=TRY");
            console.log(resp.data)
            setCurrencies(resp.data);        
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData()
    },[])
    
    return (
        <StoreContext.Provider value={{currencies}}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/exchange" element={<Exchange/>}/>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" />
                    <Route path="/bananas" element={<Bananas />} />
                    <Route path="/jsx">
                        <Route index element={<Jsx1 />} />
                        <Route path="2" element={<Jsx2 />} />
                        <Route path="3" element={<Jsx3 />} />
                        <Route path="4" element={<Jsx4 />} />
                        <Route path="5" element={<Jsx5 />} />
                    </Route>
                    <Route path="/styles">
                        <Route index element={<Style1 />} />
                        <Route path="2" element={<Style2 />} />
                        <Route path="3" element={<Style3 />} />
                        <Route path="4" element={<Style4 />} />
                    </Route>
                    <Route path="/digital-clock-application">
                        <Route index element={<DigitalClockApplication1 />} />
                        <Route path="2" element={<DigitalClockApplication2 textColor="white"
                            bgColor="red" />} />
                        <Route path="3" element={<DigitalClockApplication3 textColor="white"
                            bgColor="purple" />} />
                    </Route>
                    <Route path="/greetings" element={<Greetings />} />
                    <Route path="/images" element={<Images1 />} />
                    <Route path="/gallery" element={<ImageGallery />} />
                    <Route path="/profile-card" element={<ProfileCard />} />
                    <Route path="/bootstrap-classical" element={<BootstrapClassical />} />
                    <Route path="/bootstrap-dynamical" element={<BootstrapDynamical />} />
                    <Route path="/icons">
                        <Route path="react" element={<ReactIcons />} />
                        <Route path="material" element={<MaterialIcons />} />
                    </Route>
                    <Route path="/events" element={<Event />} />
                    <Route path="/state">
                        <Route path="1" element={<State1 />} />
                        <Route path="2" element={<State2 />} />
                    </Route>
                    <Route path="/birthday" element={<Birthday />} />
                    {
                        conditionalRender && <Route path="/useeffect" element={<UseEffect01 name="Techpro Education" />} />
                    }
                    <Route path="/counter2" element={<Counter2 />} />
                    <Route path="/filter-list" element={<FilterList />} />
                    <Route path="/useref-hook" element={<UseRefHook />} />
                    <Route path="/next-input" element={<NextInput />} />
                    {
                        conditionalRender2 && <Route path="/class-type-component" element={<ClassTypeComponent carName="Mercedes" />} />
                    }
                    {
                        conditionalRender2 && <Route path="/function-type-component" element={<FunctionTypeComponent carName="Mercedes" />} />
                    }
                    {/* <Route path="/user-cards" element={<UserCards />} /> */}
                    <Route path="/countries" element={<Countries />} />
                    <Route path="/parent-component" element={<ParentComponent />} />
                    <Route path="form">
                        <Route index element={<Form1 />} />
                        <Route path="2" element={<Form2 />} />
                        <Route path="practice">
                            <Route path="1" element={<FormPractice1 />} />
                            <Route path="2" element={<FormPractice2 />} />
                        </Route>
                        <Route path="validation" element={<FormValidation />} />
                        <Route path="yup">
                            <Route path="1" element={<FormikYup1 />} />
                            <Route path="2" element={<FormikYup2 />} />
                        </Route>
                    </Route>
                    {/* /form/practice/2 */}
                    <Route path="to-do" element={<ToDo/>}/>
                    <Route path="impl" element={<Impl1/>}/>
                </Routes>
            </BrowserRouter>
        </StoreContext.Provider>
    )
};

export default App;