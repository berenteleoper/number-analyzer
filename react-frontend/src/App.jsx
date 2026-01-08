import { useState } from "react";
import NumberInput from "./Components/NumberInput";
import AnalyzeButton from "./Components/AnalyzeButton";
import ResultCard from "./Components/ResultCard";
import ResetButton from "./Components/ResetButton";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const resetAll = () => {
    setNumber("");
    setResult(null);
    setError("");
  };

  const analyzeNumber = async () => {
    if (number === "" || isNaN(number)) {
      setError("Please enter a valid number");
      setResult(null);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/analyze?number=${number}`
      );
      const data = await response.json();
      setResult(data);
      setError("");
    } catch {
      setError("Server error. Please try again.");
      setResult(null);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="app-card">
        <h2>Number Analyzer</h2>

        <NumberInput 
        value={number} 
        onChange={setNumber}
        onEnter={analyzeNumber} 
        />

        <AnalyzeButton onClick={analyzeNumber} loading={loading} />

        <ResetButton onReset={resetAll} />

        {error && <p className="error">{error}</p>}

        {result && (
          <ResultCard 
            number={result.number}
            isEven={result.isEven}
            isPositive={result.isPositive}
            />
        )}

      </div>
    </div>
  );
}

export default App;
