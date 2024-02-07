import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const myResults = calculateInvestmentResults(userInput);
  const initialInvestment =
    myResults[0].valueEndOfYear -
    myResults[0].interest -
    myResults[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          {/* Render header cells here */}
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {myResults.map((result) => {
          const totalInterest =
            result.annualInvestment * result.year - initialInvestment;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              {/* Render data cells here */}
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
