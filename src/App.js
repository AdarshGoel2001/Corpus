import "./App.css";
import Form from "./components/form";
import Chart from "./components/chart";
import Result from "./components/result";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState([]);
  const [currentAge, setCurrentAge] = useState(0);
  const [avInflation, setAvInflation] = useState(0);

  const handleCallback = (childData, currentAge, avInflation) => {
    // const { childDataExtract, currentAgeExtract, avInflationExtract } =
    //   childData;
    // console.log("childDataExtract", childDataExtract);

    setState(childData);
    setCurrentAge(currentAge);
    setAvInflation(avInflation);
  };

  return (
    <div className="App">
      <div className="px-10">
        {" "}
        <Form parentCallback={handleCallback} />
      </div>
      <div className="chartCss">
        <div>
          <Chart data={state} />
        </div>
        <div>
          <Result
            data={state}
            age={currentAge}
            inflation={avInflation}
          ></Result>
        </div>
      </div>
    </div>
  );
}

export default App;
