
import React, { useCallback, useState } from "react";
import "./Common.css";

const CreditScoringCard = () => {
  const [data, setData] = useState([]);
  const [product_credit_score, setProduct_credit_score] = useState(data);
  
  // const [jsonData,setJsonData] = useState("")
  const jsonData = JSON.stringify(data);
  console.log("data", data);

  const [formValues, setFormValues] = useState({
    name: "",
    displayType: "Displaying On an Pop-Up",
    conditionalDisplayType: "Scoring Criteria",
    scaleUp: false,
    offset: "",
    factor: "",
  });

  const addRow = useCallback(() => {
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d.push({
        variable: "",
        scoringCriteria: [
          {
            condition: "",
            conditionVal: "",
            notMasterDrop: "",
            notMasterField: "",
          },
        ],
        score: [""],
        flag: [false],
        narration: [""],
        weightage: "",
      });
      return d;
    });
  }, []);

  const deleteRow = useCallback((idx) => {
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d.splice(idx, 1);
      return d;
    });
  }, []);

  const addSubRow = useCallback((rowIdx) => {
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].scoringCriteria.push({
        condition: "",
        conditionVal: "",
        notMasterDrop: "",
        notMasterField: "",
      });
      d[rowIdx].score.push("");
      d[rowIdx].flag.push(false);
      d[rowIdx].narration.push("");
      return d;
    });
  }, []);

  const deleteSubRow = useCallback((rowIdx, idx) => {
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].scoringCriteria.splice(idx, 1);
      d[rowIdx].score.splice(idx, 1);
      d[rowIdx].flag.splice(idx, 1);
      d[rowIdx].narration.splice(idx, 1);
      return d;
    });
  }, []);

  const handleChange = (e, rowIdx, subRowIdx) => {
    console.log("ee", e.target.value);
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].scoringCriteria[subRowIdx].condition = e.target.value;
      return d;
    });
  };

  



  const handlevariableChange  =(e, rowIdx)=>{
    console.log("ee", e.target.value);
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].variable = e.target.value;
      return d;
    });
  }

  const handleweightageChange  =(e, rowIdx)=>{
    console.log("ee", e.target.value);
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].weightage = e.target.value;
      return d;
    });
  }

  const handlescore_valueChange  =(e, rowIdx)=>{
    console.log("ee", e.target.value);
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].score_value = e.target.value;
      return d;
    });
  }

  

  const handleflagChange  =(e, rowIdx)=>{
    console.log("ee", e.target.value);
    setData((ps) => {
      let d = JSON.parse(JSON.stringify(ps));
      d[rowIdx].flag = e.target.value;
      return d;
    });
  }

  const submitData = useCallback(() => {
    const { name, displayType, conditionalDisplayType, scaleUp, offset, factor } = formValues;
  
    const productCreditScore = data.map((row) => {
      return {
        variable: row.variable,
        scoringCriteria: row.scoringCriteria.map((subRow) => {
          return {
            type: subRow.condition,
            criteria: subRow.conditionVal,
          };
        }),
        score_value: row.score,
        flag: row.flag,
        narration: row.narration,
        weightage: row.weightage,
      };
    });
  
    const payload = {
      name,
      display_type: displayType,
      condition_display_type: conditionalDisplayType,
      scale_up: scaleUp ? "Yes" : "No",
      offset,
      factor,
      product_credit_score: productCreditScore,
    };
  
    console.log("JSON data to be submitted:", payload);
  }, [data, formValues]);
  
  



  return (
    <div style={{ margin: "10px" }}>
     <div class="card">
  <div class="card-body">
    <form class="form-grid">
      <div class="form-group">
        <label for="ReplicateScorecard">Replicate Scorecard:</label>
        <select class="form-control" id="ReplicateScorecard" name="ReplicateScorecard">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div class="form-group">
        <label for="DisplayType">Display Type:</label>
        <select class="form-control" id="DisplayType" name="DisplayType">
          <option value="Displaying On an Pop-Up">Displaying On an Pop-Up</option>
          <option value="Letter Grade">Letter Grade</option>
        </select>
      </div>

      <div class="form-group">
        <label for="ConditionalDisplayType">Conditional Display Type:</label>
        <select class="form-control" id="ConditionalDisplayType" name="ConditionalDisplayType">
          <option value="Scoring Criteria">Scoring Criteria</option>
          <option value="When Conditions Met">When Conditions Met</option>
          <option value="Discription">Discription</option>
        </select>
      </div>

      <div class="form-group">
        <label for="Name">Name:</label>
        <input type="text" class="form-control" id="Name" name="Name" placeholder="Name" />

      </div>

      <div class="form-group">
        <label for="Intercept">Intercept:</label>
        <input type="number" class="form-control" id="Intercept" name="Intercept"/>
      </div>

      <div class="form-group">
        <label for="Offset">Offset:</label>
        <input type="number" class="form-control" id="Offset" name="Offset"/>
      </div>

      <div class="form-group">
        <label>Scale Up:</label>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="ScaleUpYes" name="ScaleUp" value="Yes"/>
          <label class="form-check-label" for="ScaleUpYes">Yes</label>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="ScaleUpNo" name="ScaleUp" value="No"/>
          <label class="form-check-label" for="ScaleUpNo">No</label>
        </div>
      </div>

    </form>
  </div>
</div>


      <div style={{ display: "flex", marginBottom: "10px" }}>
       

        <button
          type="button"
          class="Submit-button1" 
          onClick={addRow}

        >
          ADD
        </button>




      </div>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Scoring Criteria</th>
              <th scope="col">Score</th>
              <th scope="col">Flag</th>
              <th scope="col">Narration</th>
              <th scope="col">Weightage (%)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>

                    <select className="form-control" 
          onChange={(e) => handlevariableChange(e, idx)}
                    
                    >

                      <option value="1">Number Of Shops in th Vicinity</option>
                      <option value="2">TIN Registration</option>
                      <option value="3">Years in Business</option>
                      <option value="owners_age">Owners(s) Age</option>
                      <option value="5">Loan to Existing Borrowers </option>
                    </select>
                  </td>
                  <td>
                {row.scoringCriteria.map((subRow, subIdx) => {
  return (
    <div style={{ display: "flex", marginBottom: "8px" }}>
      <div className="col-4" style={{ paddingRight: "8px" }}>
        <select
          className="form-control"
          onChange={(e) => handleChange(e, idx, subIdx)}
        >
          <option value="n/a">N/A</option>

          <option value="equals">Equals</option>
          <option value="between">Between</option>
          <option value="greaterThan">Greater than</option>
          <option value="lessThan">Less than</option>
          <option value="greaterThanOrEqual">Greater than or Equal</option>
          <option value="lessThanOrEqual">Less than or Equal</option>
          <option value="value">Value</option>
        </select>
      </div>
      {subRow.condition === "between" ? (
        <>
          <div className="col-4" style={{ paddingRight: "8px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Min Value"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Max Value"
            />
          </div>
        </>
      ) : (subRow.condition === "equals" || subRow.condition === "value") ? (
        <div className="col-8">
          <input
            type="text"
            className="form-control"
            placeholder="Value"
          />
        </div>
      ) : (
        [
          "greaterThan",
          "lessThan",
          "greaterThanOrEqual",
          "lessThanOrEqual",
        ].includes(subRow.condition) ? (
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              placeholder="condition"
              disabled={true}
              value={conditionSymbol[subRow.condition]}
            />
          </div>
        ) : (
          <>
            <div className="col-4" style={{ paddingRight: "8px" }}>
              <select className="form-control">
                <option value="1" selected>
                  Not From Masters
                </option>
                <option value="2">From Masters</option>
                {/* Add other options here */}
              </select>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Not From Masters Fields"
              />
            </div>
          </>
        )
      )}
    </div>
  );
})}

                  </td>
                  <td 
                  
          onChange={(e) => handlescore_valueChange(e, idx)}


                  >
                    {row.score.map((s) => {
                      return (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Score"
                          style={{ marginBottom: "8px" }}
                        />
                      );
                    })}
                  </td>

                  <td style={{ display: "flex", flexDirection: "column" }} 
                  
          // onChange={(e) => handleflagChange(e, idx)}

                  
                  >
              
                        <input
                          type="checkbox"
                          style={{ margin: "12px 0px 20px 0px" }}
                        />
                    
                  </td>

                  <td>
                    {row.narration.map((n, subIdx) => {
                      

                      return (
                        <div
                          style={{ display: "flex", marginBottom: "8px" }}
                          key={subIdx}
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Narration"
                            style={{ marginRight: "15px" }}
                          />
                          {subIdx === 0 ? (
                            <span
                              onClick={() => addSubRow(idx)}
                              style={{
                                margin: "auto",
                                background: "#3db43d",
                                color: "white",
                                height: "28px",
                                width: "28px",
                                cursor: "pointer",
                              }}
                            >
                              <i
                                className="fa-sharp fa-solid fa-plus"
                                style={{ padding: "5px" }}
                              ></i>
                            </span>
                          ) : (
                            <span
                              onClick={() => deleteSubRow(idx, subIdx)}
                              style={{
                                margin: "auto",
                                background: "#d41919",
                                color: "white",
                                height: "28px",
                                width: "28px",
                                cursor: "pointer",
                              }}
                            >
                              <i
                                class="fa-sharp fa-solid fa-trash"
                                style={{ padding: "5px" }}
                              ></i>
                            </span>
                          )}
                        </div>
                      );
                    })}
                    {/* add btns */}
                  </td>

                  <td style={{ verticalAlign: "middle" }} 
          onChange={(e) => handleweightageChange(e, idx)}
                  
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="% Weightage"
                    />
                  </td>
                  <td
                    style={{
                      verticalAlign: "middle",
                      textAlign: "-webkit-center",
                    }}
                  >
                    <span
                      onClick={() => deleteRow(idx)}
                      style={{
                        background: "#d41919",
                        color: "white",
                        height: "30px",
                        width: "30px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        class="fa-sharp fa-solid fa-trash"
                        style={{ padding: "5px" }}
                      ></i>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {data.length > 0 && (
          <div style={{ display: "flex", marginBottom: "10px" }}>
          


<button class="Submit-button" onClick={submitData} >
          Submit
        </button>


          </div>
        )}
      </div>
    </div>
  );
};

export default CreditScoringCard;

const conditionSymbol = {
  greaterThan: "> than",
  lessThan: "< than",
  greaterThanOrEqual: ">=",
  lessThanOrEqual: "<=",
};