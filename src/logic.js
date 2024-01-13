function calcExpAfterInflation(AnnExpenseAtRetirement, avInflation, yearsToGo) {
  return AnnExpenseAtRetirement * (1 + avInflation / 100) ** yearsToGo;
}

function populateYearDataArray(
  retirementAge,
  currentAge,
  deathAge,
  avInflation,
  avLifestyleInflation,
  avInvestmentReturn,
  AnnExpenseAtRetirement
) {
  const yearDataArray = [];

  for (let i = retirementAge; i <= deathAge; i++) {
    const yearData = new Object();
    if (i === retirementAge) {
      yearData.age = i;
      yearData.expenses = calcExpAfterInflation(
        AnnExpenseAtRetirement,
        avInflation,
        retirementAge - currentAge
      );
      yearData.corpusLeft = 0;
    } else {
      const newYearExpenses =
        yearDataArray[i - retirementAge - 1].expenses *
        (1 + (avLifestyleInflation + avInflation) / 100);
      yearData.age = i;
      yearData.expenses = newYearExpenses;
      yearData.corpusLeft = 0;
    }
    yearDataArray.push(yearData);
  }
  for (let i = deathAge; i >= retirementAge; i--) {
    if (i === deathAge) {
      yearDataArray[i - retirementAge].corpusLeft =
        yearDataArray[i - retirementAge].expenses;
    } else {
      const newYearCorpusLeft =
        yearDataArray[i - retirementAge + 1].corpusLeft /
          (1 + avInvestmentReturn / 100) +
        yearDataArray[i - retirementAge].expenses;
      yearDataArray[i - retirementAge].corpusLeft = newYearCorpusLeft;
    }
  }
  return yearDataArray;
}

function calcCorpusBeforeinflation(
  corpusAfterInflation,
  avInflation,
  yearsToGo
) {
  return corpusAfterInflation / (1 + avInflation / 100) ** yearsToGo;
}

export default populateYearDataArray;
