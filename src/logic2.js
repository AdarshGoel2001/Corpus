function calcCorpusBeforeinflation(
  corpusAfterInflation,
  avInflation,
  yearsToGo
) {
  return corpusAfterInflation / (1 + avInflation / 100) ** yearsToGo;
}

export default calcCorpusBeforeinflation;
