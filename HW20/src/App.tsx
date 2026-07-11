import { useState, useEffect } from "react";
import './App.css'

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState("");

  const billValue = Number(bill);
  const peopleValue = Number(people);

  const tipAmountPerPerson =
    peopleValue > 0 ? (billValue * tip) / peopleValue : 0;

  const totalPerPerson =
    peopleValue > 0 ? (billValue + billValue * tip) / peopleValue : 0;

  useEffect(() => {
    console.log("წარმატებით დამაუნთდა");
  }, []);

  return (
    <>
      <div className = "container">
        <div className="MainText">
          <p>S P L I</p>
          <p>T T E R</p>
        </div>

        <div className="Card">

          <div className="LeftInput">
            <div className="Bill">
            <label>Bill</label>
            <div className="BillInput">
              <p>$</p>
              <input
                type="number"
                placeholder="0"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </div>
          </div>

            <div className="TipSelection">
              <p>Select Tip %</p>

              <div className="Tips">
                <button className={tip === 0.05 ? "selected" : ""}onClick={() => setTip(0.05)}>5%</button>
                <button className={tip === 0.1 ? "selected" : ""}onClick={() => setTip(0.1)}>10%</button>
                <button className={tip === 0.15 ? "selected" : ""}onClick={() => setTip(0.15)}>15%</button>
                <button className={tip === 0.25 ? "selected" : ""}onClick={() => setTip(0.25)}>25%</button>
                <button className={tip === 0.5 ? "selected" : ""}onClick={() => setTip(0.5)}>50%</button>
                <input
                  type="number"
                  placeholder="Custom"
                  className="TipInput"
                  onChange={(e) => setTip(Number(e.target.value) / 100)}
                />
              </div>
            </div>

            <div className="People">
              <div className="PeopleLabel">
                <label>Number of People</label>

                {people === "0" && (
                  <span className="ErrorText">Can’t be zero</span>
                )}
              </div>

              <div className={`PeopleInput ${people === "0" ? "Error" : ""}`}>
                <span className="material-symbols-outlined">
                  contacts_product
                </span>

                <input
                  type="number"
                  placeholder="0"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
            </div>
            </div>
          
          <div className="RightSum">
            <div className="SumGroup">
              <div className="Sum">
                <div className="RightStatic">
                  <h3>Tip Amount</h3>
                  <h4>/ Person</h4>
                </div>
                <p>${tipAmountPerPerson.toFixed(2)}</p>
              </div>

              <div className="Sum">
                <div className="RightStatic">
                  <h3>Total</h3>
                  <h4>/ Person</h4>
                </div>
                <p>${totalPerPerson.toFixed(2)}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setBill("");
                setPeople("");
                setTip(0);
              }}
            >
              RESET
            </button>

          </div>
        </div>
      </div>
    
    </>
  );
}