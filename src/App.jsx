import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navigation from "./Navigation";
import HelloWorldComponent from "./hello-world/hello-world-component";
import FlexBoxComponent from "./flex-box/flex-box-component";
import FlexWrapComponent from "./flex-wrap/flex-wrap-component";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-execllence-component";
import PostionComponent from "./positioning/position-component";
import PositionExampleComponent from "./position-example/position-example-component";
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import OurPromisesComponent from "./our-promises/our-promises";
import PropsPractice from "./props-practice/props-practice";
import PropsPractice2 from "./props-practice-2/props-practice-2";
import UseStateComponent from "./usestate-1st/use-state-component";
// import UseStateFormComponent from "./use-state-form/use-state-form-component";
// import AdditionOperation from "./addition-operation-in-state/addition-operation";
// import WelcomeComponent from "./welcome/welcome-component";
import ApiExampleComponent from "./fetch-api/fetch-api-component";
import FourOFourComponent from "./404-component/404-component";
import RegisterForm from "./Register-form/register-form";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ApiExampleComponent />} />
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route path="/hello-world" element={<HelloWorldComponent />} />
        <Route path="/flex-box" element={<FlexBoxComponent />} />
        <Route path="/flex-wrap" element={<FlexWrapComponent />} />
        <Route path="/leaders-tomorrow" element={<LeadersTomorrowComponent />} />
        <Route path="/symbol-of-excellence" element={<SymbolOfExcellenceComponent />} />
        <Route path="/positioning" element={<PostionComponent />} />
        <Route path="/position-example" element={<PositionExampleComponent />} />
        <Route path="/trusted-by" element={<TrustedbyComponent />} />
        <Route path="/our-promises" element={<OurPromisesComponent />} />
        <Route path="/props-practice" element={<PropsPractice />} />
        <Route path="/props-practice-2" element={<PropsPractice2 />} /> 
        <Route path="/use-state" element={<UseStateComponent />} />
        {/* <Route path="/use-state-form" element={<UseStateFormComponent />} /> */}
        {/* <Route path="/addition-operation" element={<AdditionOperation />} /> */}
        {/* <Route path="/welcome" element={<WelcomeComponent />} /> */}
        <Route path="/api-example" element={<ApiExampleComponent />} />
        <Route path="*" element={<FourOFourComponent />} />
      </Routes>
    </div>
  );
}

export default App;