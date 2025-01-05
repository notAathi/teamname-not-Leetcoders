import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressTracker.css'; // Ensure this file has the styles
import Imageto from './imageholder.jpeg'; // Correct path for your uploaded image

const ProgressTracker = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Profile Section */}
      <div className="profile">
        <img src={Imageto} alt="Profile" className="profile-img" />
        <h2>Name</h2>
        <p>Roll Number: 23f12345</p>
      </div>

      {/* Progress Bars Section */}
      <div className="progress-bars">
        <div className="progress-item">
          <label>Stats 1 Week 5</label>
          <div className="progress-container">
            <div
              className="progress"
              style={{ width: '80%', backgroundColor: '#4CAF50' }}
            ></div>
          </div>
          <span>80%</span>
        </div>
        <div className="progress-item">
          <label>Maths 1 Week 5</label>
          <div className="progress-container">
            <div
              className="progress"
              style={{ width: '50%', backgroundColor: '#2196F3' }}
            ></div>
          </div>
          <span>50%</span>
        </div>
        <div className="progress-item">
          <label>Python Week 5</label>
          <div className="progress-container">
            <div
              className="progress"
              style={{ width: '25%', backgroundColor: '#FFC107' }}
            ></div>
          </div>
          <span>25%</span>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="calendar">
        <h3>Daily Activity</h3>
        <div className="calendar-grid">
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
          <div className="day">Sun</div>
        </div>
      </div>

      {/* Grade Predictor Button */}
      <button
        className="grade-predictor"
        onClick={() => navigate('/GradePredictor')}
      >
        Grade Predictor
      </button>

      {/* Deadlines and Study Plan Section */}
      <div className="deadlines-study-plan">
        <div className="deadlines">
          <h3>Upcoming Deadlines</h3>
          <ul>
            <li>Week 5 Graded Assignment : Jan 10</li>
            <li>Week 6 Graded Assignment: Jan 17</li>
          </ul>
        </div>
        <div className="study-plan">
          <h3>Study Plan</h3>
          <ul>
            <li>
              <span>&#x2713;</span> Watch Stats 1 Lec 3-5
            </li>
            <li>
              <span>&#x2713;</span> Solve Maths 1 PA Week 2
            </li>
          </ul>
        </div>
      </div>

      {/* Activity Tracker Section */}
      <div className="activity-section">
        <h3>Activity Tracker</h3>
        <div className="activity-item">
          <span>Today</span>
          <div className="progress-container">
            <div
              className="progress"
              style={{ width: '70%', backgroundColor: '#4CAF50' }}
            ></div>
          </div>
          <span>2h 30m</span>
        </div>
        <div className="activity-extra">
          <div className="info-box">
            <h4>Longest Streak</h4>
            <p>7 Days</p>
          </div>
          <div className="info-box">
            <h4>Current Streak</h4>
            <p>3 Days</p>
          </div>
        </div>
      </div>

      {/* Subject Distribution Section */}
      <div className="pie-chart-section">
        <h3>Subject Distribution</h3>
        <div className="pie-chart">
          <div className="slice stats" style={{ '--percentage': '60deg' }}></div>
          <div className="slice maths" style={{ '--percentage': '30deg' }}></div>
          <div className="slice python" style={{ '--percentage': '50deg' }}></div>
          <div className="center">Progress</div>
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="heatmap">
        <h3>Heatmap of Daily Activity</h3>
        <div className="heatmap-grid">
          <div className="heatmap-cell low">1</div>
          <div className="heatmap-cell medium">2</div>
          <div className="heatmap-cell high">3</div>
          <div className="heatmap-cell medium">2</div>
          <div className="heatmap-cell low">1</div>
          <div className="heatmap-cell high">3</div>
          <div className="heatmap-cell medium">2</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
