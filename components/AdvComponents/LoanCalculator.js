import { useState } from "react";
import { tenureData } from "./utils/constants";

export const LoanCalculator = () => {
  const [cost, setCost] = useState(0);
  const [interest, SetInterest] = useState(10);
  const [fees, SetFees] = useState(1);
  const [downPayment, SetDownPayment] = useState(0);
  const [tenure, SetTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEmi = () => {
    if (!cost) return;
    const loanAmount = cost - downPayment;
    const rateOfInterest = interest / 100;
    const numberOfYears = tenure / 12;
  };
  const updateEmi = (e) => {
    if (!cost) return;
    let dp = Number(e.target.value);
    return SetDownPayment(dp.toFixed());
    // calculate the EMI and update it
  };
  const updateDownPayment = (e) => {
    if (!cost) return;
    let emi = Number(e.target.value);
    return setEmi(emi.toFixed());
    // calculate down payment based on cost and EMI...update it
  };
  return (
    <div
      style={{
        padding: "20px 20px",
        border: "1px solid #000",
        margin: "10px 20px",
      }}
    >
      <h2> Loan Calculator : </h2>
      <div>
        <span class="title">Total Cost Of Asset</span>
        <input
          type="text"
          style={{ border: "1px solid #000" }}
          name="cost"
          onClick={(e) => {
            return setCost(e.target.value);
          }}
          value={cost}
          placeholder="total cost of assets"
        />
      </div>
      <div>
        <span class="title">Total Interest Rate (in%):- </span>
        <input
          type="text"
          style={{ border: "1px solid #000" }}
          name="interest"
          onClick={(e) => {
            return SetInterest(e.target.value);
          }}
          value={interest}
          placeholder="total Interest"
        />
      </div>
      <div>
        <span class="title">Processing Fees (in%):- </span>
        <input
          type="text"
          style={{ border: "1px solid #000" }}
          name="fees"
          onClick={(e) => {
            return SetFees(e.target.value);
          }}
          value={fees}
          placeholder="total cost of assets"
        />
      </div>
      <div>
        <span class="title">Down Payment </span>
        <input
          type="range"
          min={0}
          max={cost}
          value={downPayment}
          onChange={updateEmi}
        />
      </div>
      <div>
        <span class="title">Loan Per Month </span>
        <input
          type="range"
          min={calculateEmi(cost)}
          max={calculateEmi(0)}
          value={emi}
          className="slider"
          onChange={updateDownPayment}
        />
      </div>
      <div>
        <label for="" className="emi">
          <span className="labels">0%</span>
          {calculateEmi(cost)}

          <span className="labels">
            <b>{downPayment}</b>
          </span>
          <span className="labels">100%</span>
        </label>
        <label>{calculateEmi(0)}</label>
        <div>
          <span class="title">Tenure </span>
          <input type="range" min={tenure} max="100" value={tenure} />
        </div>
        <div>
          <span>Month Tenure</span>
          {tenureData.map((t) => {
            return (
              <button
                className={`tenure ${t === tenure ? "selected" : " "}`}
                onClick={() => {
                  return SetTenure(t);
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
