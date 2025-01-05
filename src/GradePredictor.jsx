import React, { useState } from 'react';

const GradePredictor = () => {
  const [gaa, setGaa] = useState('');
  const [qz1, setQz1] = useState('');
  const [qz2, setQz2] = useState('');
  const [f, setF] = useState('');
  const [finalScore, setFinalScore] = useState(null);

  const calculateFinalScore = (GAA, Qz1, Qz2, F) => {
    const part1 = 0.1 * GAA;
    const part2 = 0.6 * F + 0.2 * Math.max(Qz1, Qz2);
    const part3 = 0.4 * F + 0.2 * Qz1 + 0.3 * Qz2;
    const maxPart = Math.max(part2, part3);
    return part1 + maxPart;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateFinalScore(parseFloat(gaa), parseFloat(qz1), parseFloat(qz2), parseFloat(f));
    setFinalScore(score.toFixed(2));
  };

  return (
    <div style={{
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      backgroundColor: '#000000', // Pure black
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#1e1e1e', // Slightly lighter black
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ textAlign: 'center', color: '#f5f5f5' }}>Grade Predictor</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#cccccc' }}>GAA (Weekly Assignments Average):</label>
            <input
              type="number"
              step="0.1"
              value={gaa}
              onChange={(e) => setGaa(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '5px', backgroundColor: '#1e1e1e', color: '#ffffff' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#cccccc' }}>Quiz 1 Score:</label>
            <input
              type="number"
              step="0.1"
              value={qz1}
              onChange={(e) => setQz1(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '5px', backgroundColor: '#1e1e1e', color: '#ffffff' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#cccccc' }}>Quiz 2 Score:</label>
            <input
              type="number"
              step="0.1"
              value={qz2}
              onChange={(e) => setQz2(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '5px', backgroundColor: '#1e1e1e', color: '#ffffff' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#cccccc' }}>Final Exam Score:</label>
            <input
              type="number"
              step="0.1"
              value={f}
              onChange={(e) => setF(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #555', borderRadius: '5px', backgroundColor: '#1e1e1e', color: '#ffffff' }}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: '#007BFF',
              color: '#ffffff',
              border: 'none',
              padding: '10px 15px',
              cursor: 'pointer',
              borderRadius: '5px',
              width: '100%',
              fontSize: '16px'
            }}
          >
            Predict Grade
          </button>
        </form>
        {finalScore !== null && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#00d4ff' }}>Final Course Score (T): {finalScore}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradePredictor;
