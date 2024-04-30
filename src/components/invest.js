import { useState } from "react";
import "../components/style.css";
import Hero from "./Hero";

function Invest() {
  let yearlyData = [];

  //   const [currentSavings, setCurrentSavings] = useState(0);
  const [inputs, setInputs] = useState({});
  const [yearlyDetails, setYearlyDetails] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
    let currentSavings = Number(inputs.currentSavings);
    let yearlyContribution = Number(inputs.yearlyContribution);
    let expectedInterest = Number(inputs.expectedInterest) / 100;
    let investmentDuration = Number(inputs.investmentDuration);
    console.log(expectedInterest);
    for (let i = 0; i < investmentDuration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // console.log(yearlyData);
    setYearlyDetails(yearlyData);
  };

  const handleReset = () => {
    setInputs({
      currentSavings: "",
      yearlyContribution: "",
      expectedInterest: "",
      investmentDuration: "",
    });
  };

  // const tableRows = yearlyDetails.map((obj) => {
  //   return (
  //     <tr>
  //       <td>
  //         <b>Year :</b>
  //       </td>{" "}
  //       <td>{obj.year}</td>
  //       <td>
  //         <b>Yearly Interest :</b>
  //       </td>{" "}
  //       <td>{obj.yearlyInterest}</td>
  //       <td>
  //         <b>Yearly Contribution :</b>
  //       </td>{" "}
  //       <td>{obj.yearlyContribution}</td>
  //       <td>
  //         <b>Saving End Of Year :</b>
  //       </td>{" "}
  //       <td>{obj.savingEndOfYear}</td>
  //     </tr>
  //   );
  // });

  return (
    <>
      <h2>INVESTMENT CALCULATOR </h2>

      <form className="myForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="contact">
            <label htmlFor="currentSavings">Current Savings (Rs)</label>
            <input
              type="number"
              name="currentSavings"
              value={inputs.currentSavings || ""}
              onChange={handleChange}
            />
            <label htmlFor="yearlyContribution">Yearly Savings (Rs)</label>
            <input
              type="number"
              name="yearlyContribution"
              value={inputs.yearlyContribution || ""}
              onChange={handleChange}
            />
          </div>
          <div className="contact">
            <label htmlFor="expectedInterest">
              Expected Interest (% per year)
            </label>{" "}
            <br />
            <input
              type="number"
              name="expectedInterest"
              value={inputs.expectedInterest || ""}
              onChange={handleChange}
            />
            <label htmlFor="investmentDuration">
              Investment Duration (Year)
            </label>
            <input
              type="number"
              name="investmentDuration"
              value={inputs.investmentDuration || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="contact-btn">
            <button type="button" className="btn" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="btn">
              {" "}
              Calculate
            </button>
          </div>
        </div>

        <div className="row">
          <table>
            <tr>
              <th>
                <b>Year</b>
              </th>
              <th>
                <b>Yearly Interest</b>
              </th>

              <th>
                <b>Yearly Contribution</b>
              </th>

              <th>
                <b>Saving End Of Year</b>
              </th>
            </tr>
            {yearlyDetails.map((obj) => {
              return (
                <tr>
                  <td>{obj.year}</td>
                  <td>{obj.yearlyInterest}</td>
                  <td>{obj.yearlyContribution}</td>
                  <td>{obj.savingEndOfYear}</td>
                </tr>
              );
            })}
          </table>
        </div>
        {/* <table>{tableRows}</table> */}
      </form>
    </>
  );
}

export default Invest;
