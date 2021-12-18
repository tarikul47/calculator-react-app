import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const handleClear = () => {
    setResult("");
  };

  const handleBack = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Syntax Error");
    }
  };
  return (
    <div className="container my-4">
      <hr className="mb-5" />

      <div className="calculator card">
        <input
          type="text"
          className="calculator-screen z-depth-1"
          value={result}
          disabled
        />

        <div className="calculator-keys">
          <button
            name="+"
            onClick={handleClick}
            type="button"
            className="operator btn btn-info"
            value="+"
          >
            +
          </button>
          <button
            name="-"
            onClick={handleClick}
            type="button"
            className="operator btn btn-info"
            value="-"
          >
            -
          </button>
          <button
            name="*"
            onClick={handleClick}
            type="button"
            className="operator btn btn-info"
            value="*"
          >
            &times;
          </button>
          <button
            name="/"
            onClick={handleClick}
            type="button"
            className="operator btn btn-info"
            value="/"
          >
            &divide;
          </button>

          <button
            name="7"
            onClick={handleClick}
            type="button"
            value="7"
            className="btn btn-light waves-effect"
          >
            7
          </button>
          <button
            name="8"
            onClick={handleClick}
            type="button"
            value="8"
            className="btn btn-light waves-effect"
          >
            8
          </button>
          <button
            name="9"
            onClick={handleClick}
            type="button"
            value="9"
            className="btn btn-light waves-effect"
          >
            9
          </button>

          <button
            name="4"
            onClick={handleClick}
            type="button"
            value="4"
            className="btn btn-light waves-effect"
          >
            4
          </button>
          <button
            name="5"
            onClick={handleClick}
            type="button"
            value="5"
            className="btn btn-light waves-effect"
          >
            5
          </button>
          <button
            name="6"
            onClick={handleClick}
            type="button"
            value="6"
            className="btn btn-light waves-effect"
          >
            6
          </button>

          <button
            name="1"
            onClick={handleClick}
            type="button"
            value="1"
            className="btn btn-light waves-effect"
          >
            1
          </button>
          <button
            name="2"
            onClick={handleClick}
            type="button"
            value="2"
            className="btn btn-light waves-effect"
          >
            2
          </button>
          <button
            name="3"
            onClick={handleClick}
            type="button"
            value="3"
            className="btn btn-light waves-effect"
          >
            3
          </button>

          <button
            name="0"
            onClick={handleClick}
            type="button"
            value="0"
            className="btn btn-light waves-effect"
          >
            0
          </button>
          <button
            name="."
            onClick={handleClick}
            type="button"
            className="decimal function btn btn-secondary"
            value="."
          >
            .
          </button>
          <button
            name=""
            onClick={handleClear}
            type="button"
            className="all-clear btn btn-danger btn-sm"
          >
            AC
          </button>
          <button
            name=""
            onClick={handleBack}
            type="button"
            className="all-clear btn btn-back btn-sm"
          >
            C
          </button>

          <button
            name=""
            onClick={handleCalculate}
            type="button"
            className="equal-sign operator btn btn-default"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
