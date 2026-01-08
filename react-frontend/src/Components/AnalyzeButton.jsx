import "./AnalyzeButton.css"

function AnalyzeButton({ onClick, loading }) {
  return (
    <button 
      className="analyze-button" 
      onClick={onClick}
      disabled={loading}
    >
     {loading ? "Analyzing..." : "Analyze"}
    </button>
  );
}

export default AnalyzeButton;
