import React, { useState } from "react";
import calcCorpusBeforeinflation from "../logic2.js";

const Result = (props) => {
  const corpus = props.data[0]?.corpusLeft;
  const currentAgeExtract = props?.age;
  const avInflationExtract = props?.inflation;
  const yearsToGo = props.data[0]?.age - currentAgeExtract;
  const corpusDeflated = calcCorpusBeforeinflation(
    corpus,
    avInflationExtract,
    yearsToGo
  );

  return (
    <div className="flex items-center md:flex-col py-10">
      <div className="w-1/2 md:w-full ">
        <div className="">
          <div className="mb-4 py-1">
            <label className="text-white block text-sm font-semibold mb-2 py-3">
              Absolute Corpus at retirement:
            </label>
            <label className="w-full px-4 py-3 placeholder:text-[#989898] border border-[#676767] rounded-md bg-transparent outline-none text-white ">
              {corpus}
            </label>
            <label className="text-white block text-sm font-semibold mb-2 py-5">
              Retirement corpus in todays money:
            </label>
            <label className="w-full px-4 py-3 placeholder:text-[#989898] border border-[#676767] rounded-md bg-transparent outline-none text-white">
              {corpusDeflated}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
