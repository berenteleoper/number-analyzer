import "./NumberInput.css";

function NumberInput({ value, onChange, onEnter }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onEnter();
        }
      }}
      placeholder="Enter a number"
      className="number-input"
    />
  );
}

export default NumberInput;
