import "./ResultCard.css";

function ResultCard({ number, isEven, isPositive }) {
  return (
    <div className="result-card">
      <p><strong>Number:</strong> {number}</p>
      <p><strong>Even:</strong> {isEven ? "Yes" : "No"}</p>
      <p><strong>Positive:</strong> {isPositive ? "Yes" : "No"}</p>
    </div>
  );
}

export default ResultCard;
