import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../Components/NavigationBar";
import "./YearSemesterSelectionPage.css"; // Keep your existing CSS

const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
const semesters = ["1st Semester", "2nd Semester"];

export default function YearSemesterSelector({ theme, toggleTheme, user, setUser }) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const navigate = useNavigate();

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setSelectedSemester("");
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  const handleProceed = () => {
    if (selectedYear && selectedSemester) {
      alert(`You selected: ${selectedYear} - ${selectedSemester}`);
      // navigate(`/resources/${selectedYear}/${selectedSemester}`);
    }
  };

  return (
    <div className="year-semester-page">
      <NavigationBar
        theme={theme}
        toggleTheme={toggleTheme}
        user={user}
        setUser={setUser}
      />

      <div className="ys-container">
        <h1 className="ys-title gradient-text">Select Year & Semester</h1>
        <p className="ys-instruction">
          Please choose your current year and semester to access relevant study resources and materials.
        </p>

        <div className="ys-form">
          <div className="ys-form-group">
            <label htmlFor="year">Year</label>
            <select
              id="year"
              value={selectedYear}
              onChange={handleYearChange}
              className="ys-select"
            >
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="ys-form-group">
            <label htmlFor="semester">Semester</label>
            <select
              id="semester"
              value={selectedSemester}
              onChange={handleSemesterChange}
              className="ys-select"
              disabled={!selectedYear}
            >
              <option value="">Select Semester</option>
              {semesters.map((sem) => (
                <option key={sem} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </div>

          <button
            className="btn-primary ys-proceed-btn"
            onClick={handleProceed}
            disabled={!selectedYear || !selectedSemester}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
