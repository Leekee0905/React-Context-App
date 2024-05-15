import { useState } from "react";
import "./App.css";
import Order from "./pages/Order";
import Summary from "./pages/Summary";
import Complete from "./pages/Complete";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div style={{ padding: "4rem" }}>
      {step === 0 && <Order setStep={setStep} />}
      {step === 1 && <Summary setStep={setStep} />}
      {step === 2 && <Complete setStep={setStep} />}
    </div>
  );
}

export default App;
