import "./App.css";
import { Routes, Route } from "react-router-dom";

// MAIN COMPONENTS YOU ARE USING
import TrustedbyComponent from "./trusted-by/trusted-by-component";
import FourOFourComponent from "./404-component/404-component";

// OPTIONAL OLD COMPONENTS — COMMENTED OUT
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import OurPromisesComponent from "./our-promises/our-promises";
// import PropsPractice from "./props-practice/props-practice";
// import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-execllence-component";
// import UseStateComponent from "./usestate-1st/use-state-component";
// import UsestateformComponent from "./use-state-form/use-state-form-component";
// import AdditionOperationComponent from "./addition-operation-in-state/addition-operation-component";

// NEW REGISTER FORM ROUTE
import RegisterForm from "./Register-form/register-form";


function App() {

  // Sample Index Page (You can remove if not used)
  const IndexPage = () => {
    return (
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "400px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠 Home Page</h1>
        <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
          This is the index route
        </p>
      </div>
    );
  };

  return (
    <div>
      <Routes>

        <Route path="/" element={<RegisterForm />} />

        <Route path="/trusted" element={<TrustedbyComponent />} />

        {/* <Route path="/eshwar" element={<HelloWorldComponent />} /> */}
        {/* <Route path="/our-promise" element={<OurPromisesComponent />} /> */}
        {/* <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} /> */}
        {/* <Route path="/use-state-practice" element={<UseStateComponent />} /> */}
        {/* <Route path="/use-state-form" element={<UsestateformComponent />} /> */}
        {/* <Route path="/addition-operation" element={<AdditionOperationComponent />} /> */}

        {/* 404 PAGE */}
        <Route path="*" element={<FourOFourComponent />} />

      </Routes>
    </div>
  );
}

export default App;