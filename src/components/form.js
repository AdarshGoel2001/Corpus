import React, { useState } from "react";
import populateYearDataArray from "../logic.js";

const Form = (props) => {
  const [retirementAge, setRetirementAge] = useState(0);
  const [currentAge, setCurrentAge] = useState(0);
  const [deathAge, setDeathAge] = useState(0);
  const [avLifestyleInflation, setAvLifestyleInflation] = useState(0);
  const [avInvestmentReturn, setAvInvestmentReturn] = useState(0);
  const [avInflation, setAvInflation] = useState(0);
  const [AnnExpenseAtRetirement, setAnnExpenseAtRetirement] = useState(0);
  const [yearDataArray, setYearDataArray] = useState([]);

  const handleRetirementAgeChange = (e) => {
    setRetirementAge(Number(e.target.value));
  };

  const handleCurrentAgeChange = (e) => {
    setCurrentAge(Number(e.target.value));
  };

  const handleDeathAgeChange = (e) => {
    setDeathAge(Number(e.target.value));
  };

  const handleAvLifestyleInflationChange = (e) => {
    setAvLifestyleInflation(Number(e.target.value));
  };

  const handleAvInvestmentReturnChange = (e) => {
    setAvInvestmentReturn(Number(e.target.value));
  };

  const handleAvInflationChange = (e) => {
    setAvInflation(Number(e.target.value));
  };

  const handleAnnExpenseAtRetirementChange = (e) => {
    setAnnExpenseAtRetirement(Number(e.target.value));
  };
  const handleSave = () => {
    const yearData = populateYearDataArray(
      retirementAge,
      currentAge,
      deathAge,
      avInflation,
      avLifestyleInflation,
      avInvestmentReturn,
      AnnExpenseAtRetirement
    );

    setYearDataArray(yearData);
    props.parentCallback(yearDataArray, currentAge, avInflation);
  };

  return (
    <div className="flex justify-left items-center md:flex-col py-10">
      <div className="w-1/2 md:w-full">
        <div className="text-[40px] md:text-[32px] mds:text-[28px] sm:text-[20px] xs:text-[18px] font-bold text-white text-left pt-4">
          Fill this form for Corpus Calculation
        </div>
        <div className="mt-4 px-8 xs:px-4 py-4 mx-auto sm:mx-12 xs:mx-4 max-w-md bg-black/40 rounded-xl ">
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Retirement Age:
            </label>
            <input
              type="number"
              name="name"
              value={retirementAge}
              onChange={handleRetirementAgeChange}
              placeholder=""
              className="w-full px-4 py-2 placeholder:text-[#989898] border border-[#676767] rounded-md bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Current Age:
            </label>
            <input
              type="number"
              name="Enter Aadhar No"
              value={currentAge}
              onChange={handleCurrentAgeChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>

          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Approximated Lifespan Age:
            </label>
            <input
              type="number"
              name="Enter Pan No"
              value={deathAge}
              onChange={handleDeathAgeChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Average Lifestyle Inflation
            </label>
            <input
              type="number"
              name="Enter mini sal No"
              value={avLifestyleInflation}
              onChange={handleAvLifestyleInflationChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Approximated returns on Investment:
            </label>
            <input
              type="number"
              name="Enter Pan No"
              value={avInvestmentReturn}
              onChange={handleAvInvestmentReturnChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Average expected inflation:
            </label>
            <input
              type="number"
              name="Enter age No"
              value={avInflation}
              onChange={handleAvInflationChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>
          <div className="mb-4">
            <label className="text-white block text-sm font-semibold mb-2">
              Annual expense at retirement in todays money
            </label>
            <input
              type="number"
              name="Enter Phone no"
              value={AnnExpenseAtRetirement}
              onChange={handleAnnExpenseAtRetirementChange}
              className="w-full px-4 py-2 border rounded-md border-[#676767] bg-transparent outline-none text-white"
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleSave}
              className="hover:bg-black/40 mt-2 border rounded-md border-[#676767] text-white w-full py-2 rounded-md"
            >
              Press this Save twice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
