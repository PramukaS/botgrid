import { useState } from "react";

function Card() {
  const [inputs, setInputs] = useState([""]);

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className="card">
      {inputs.map((input, index) => (
        <div className="input-container" key={index}>
          {index === 0 && <button onClick={handleAddInput}>+</button>}
          <input
            type="text"
            value={input}
            onChange={(event) => handleInputChange(event, index)}
          />
          {index !== 0 && (
            <button onClick={() => handleRemoveInput(index)}>-</button>
          )}
        </div>
      ))}
    </div>
  );
}
