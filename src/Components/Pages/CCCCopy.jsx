import React, { useState } from 'react';
import './Common.css';
const CreditScoringCard = () => {
  const [formData, setFormData] = useState({
    ReplicateScorecard: 'No',
    DisplayType: 'Displaying On an Pop-Up',
    ConditionalDisplayType: 'Scoring Criteria',
    Name: '',
    Intercept: 0,
    Offset: 0,
    ScaleUp: 'No',
    ScaleUp: 'Yes',
    Variable: '',
    ScoringCriteria: '',
    Score: 0,
    Flag: '',
    Narration: '',
    Weightage: 0,
    Action: '',
  });


  const [rows, setRows] = useState([
    {
      variable: '',
      scoringCriteria: '',
      score: 0,
      flag: false,
      narration: '',
      weightage: 0,
    },
  ]);


  const [rowCount, setRowCount] = useState(1); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  };

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = () => {
    // Convert the formData object to a JSON string
    const formDataJSON = JSON.stringify(formData);

    // Save the JSON string in localStorage
    localStorage.setItem('creditScoringFormData', formDataJSON);

    // Optionally, you can also display a success message or perform other actions
    alert('Form data saved in localStorage');
  };


  // const handleRowDelete = (index) => {
  //   const updatedData = [...formData];
  //   updatedData.splice(index, 1);
  //   setFormData(updatedData);
  //   setRowCount(rowCount - 1);
  // };
  const handleRowDelete = (index) => {
    setRows((prevRows) => prevRows.filter((row, i) => i !== index));
  };
  

  const handleRowInputChange = (index, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, [<input
          type="text"
          value={row.scoringCriteria}
          onChange={(e) => handleRowInputChange(index, 'scoringCriteria', e.target.value)}
        />]: value } : row
      )
    );
  };
  
  const addRow = () => {
  setRows([...rows, { variable: '', scoringCriteria: '', score: 0, flag: false, narration: '', weightage: 0 }]);
};


  return (
    <div className="credit-scoring-container">
      <div className="form-field">
        <label>Replicate Scorecard:</label>
        <select name="ReplicateScorecard" value={formData.ReplicateScorecard} onChange={handleInputChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-field">
        <label>Display Type:</label>
        <select name="DisplayType" value={formData.DisplayType} onChange={handleInputChange}>
          <option value="Displaying On an Pop-Up">Displaying On an Pop-Up</option>
          <option value="Letter Grade">Letter Grade</option>
        </select>
      </div>

      <div className="form-field">
        <label>Conditional Display Type:</label>
        <select name="ConditionalDisplayType" value={formData.ConditionalDisplayType} onChange={handleInputChange}>
          <option value="Scoring Criteria">Scoring Criteria</option>
          <option value="When Conditions Met">Scoring Criteria</option>
          <option value="When Conditions Met">Discription </option>

        </select>
      </div>

      <div className="form-field">
        <label>Name:</label>
        <input type="text" name="Name" value={formData.InputName} onChange={handleInputChange} placeholder='Name' />
      </div>

      <div className="form-field">
        <label>Intercept:</label>
        <input type="number" name="Intercept" value={formData.Intercept} onChange={handleInputChange} />
      </div>

      <div className="form-field">
        <label>Offset:</label>
        <input type="number" name="Offset" value={formData.Offset} onChange={handleInputChange} />

      </div>

      <div className="form-field"  >
        <label>Scale Up:</label>
        <div>
          <input
            type="checkbox"
            name="ScaleUp"
            checked={formData.ScaleUp === "Yes"}
            onChange={(e) => {
              const value = e.target.checked ? "Yes" : "No";
              handleInputChange({ target: { name: "ScaleUp", value } });
            }}
          />
          <label htmlFor="ScaleUpYes">Yes</label>

        </div>
        <div style={{ marginTop: "-20px", marginLeft: "115px" }} >
          <input
            type="checkbox"
            name="ScaleUp"
            checked={formData.ScaleUp === "Yes"}
            onChange={(e) => {
              const value = e.target.checked ? "Yes" : "No";
              handleInputChange({ target: { name: "ScaleUp", value } });
            }}
          />
          <label htmlFor="ScaleUpYes">No</label>
        </div>

        <button
          type="button"
          class="Submit-button1"
          onClick={handleAddRow}
        >
          ADD
        </button>
          {/* table */}
        <table >
          
          <thead  >
            <tr  >
              <th>Variable</th>
              <th>Scoring Criteria</th>
              <th >Score</th>
              <th>Flag</th>
              <th>Narration</th>
              <th>Weightage (%)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(rowCount)].map((_, index) => (
              <tr key={index} >
                <td>

                  <div className="select-grid"  >
                    <select class="form-select" aria-label="Select 1">
                      <option selected>Number Of Shops in th Vicinity</option>
                      <option value="1">TIN Registration</option>
                      <option value="2">Years in Bussiness</option>
                      <option value="3">Owners(s) Age</option>
                      <option value="3">Loan to Existing Borrowers </option>

                    </select>
                    <select class="form-select" aria-label="Select 2">
  <option value="equals">Equals</option>
  <option value="between">Between</option>
  <option value="greaterThan">Greater than</option>
  <option value="lessThan">Less than</option>
  <option value="greaterThanOrEqual">Greater than or Equal</option>
  <option value="lessThanOrEqual">Less than or Equal</option>
  <option value="value">Value</option>
  <option value="n/a">N/A</option>
</select>

                    <select class="form-select" aria-label="Select 3">
                      <option selected>Not From Masters</option>
                      <option value="1">From Masters </option>
                      <option value="2">Relationship</option>
                      <option value="3">Gender</option>
                      <option value="3">Residentiol Status</option>
                      <option value="3">Industry</option>
                      <option value="3">Legal Entity</option>
                      <option value="3">Mariatal Status</option>
                      <option value="3">City</option>
                      <option value="3">Bussiness Activity</option>
                      <option value="3">Gender</option>



                    </select>
                    <tr >

                      <input
                        type="text"
                        value={value}
                        onChange={handleChange} placeholder='Not From Masters Fields'
                      />
                    </tr>
                  </div>
                </td>
                <td>

                </td>
                <td>
                  <input
                    type="text"
                    value={value}
                    onChange={handleChange1} placeholder='Score' style={{ width: "45px" }}
                  />
                </td>
                <td  >
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                </td>
                <td>
                  <input
                    type="text"
                    value={value}
                    onChange={handleChange1} placeholder='' style={{ width: "45px", marginRight: "-5px" }}
                  />



                </td>

                <td>


                  <i class="fa fa-plus noAll-margin" aria-hidden="true" style={{ marginRight: "-50px" }} ></i>
                  <svg class="small-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleIcon" tabindex="-1" title="AddCircle">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                  </svg>


                  <input type="number" name="Weightage" placeholder='% Weightage' class="input" />
                </td>
                <td >
                  <div className="delete-icon" style={{ marginLeft: "65px" }} >
                    <div className="delete-line"  onClick={() => handleRowDelete(index)} ></div>
                    <div className="delete-line rotated"></div>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>

        </table>



        <button class="Submit-button" onClick={handleFormSubmit} >
          Submit
        </button>
      </div>

    </div>

  );
};

export default CreditScoringCard;
