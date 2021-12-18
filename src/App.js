import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState('');
  const handleClick = e => {
    setResult(result.concat(e.target.name));
  }
  const handleClear = () => {
    setResult('')
  }
  const handleCalculate = () => {
    setResult(eval(result).toString());
  }
    return (
    <div class="container my-4">
      <hr class="mb-5" />

      <div class="calculator card">
        <input
          type="text"
          class="calculator-screen z-depth-1"
          value={result}
          disabled
        />

        <div class="calculator-keys">
          <button name="+" onClick={handleClick} type="button" class="operator btn btn-info" value="+">
            +
          </button>
          <button name="-" onClick={handleClick} type="button" class="operator btn btn-info" value="-">
            -
          </button>
          <button name="*" onClick={handleClick} type="button" class="operator btn btn-info" value="*">
            &times;
          </button>
          <button name="/" onClick={handleClick} type="button" class="operator btn btn-info" value="/">
            &divide;
          </button>

          <button name="7" onClick={handleClick} type="button" value="7" class="btn btn-light waves-effect">
            7
          </button>
          <button name="8" onClick={handleClick} type="button" value="8" class="btn btn-light waves-effect">
            8
          </button>
          <button name="9" onClick={handleClick} type="button" value="9" class="btn btn-light waves-effect">
            9
          </button>

          <button name="4" onClick={handleClick} type="button" value="4" class="btn btn-light waves-effect">
            4
          </button>
          <button name="5" onClick={handleClick} type="button" value="5" class="btn btn-light waves-effect">
            5
          </button>
          <button name="6" onClick={handleClick} type="button" value="6" class="btn btn-light waves-effect">
            6
          </button>

          <button name="1" onClick={handleClick} type="button" value="1" class="btn btn-light waves-effect">
            1
          </button>
          <button name="2" onClick={handleClick} type="button" value="2" class="btn btn-light waves-effect">
            2
          </button>
          <button name="3" onClick={handleClick} type="button" value="3" class="btn btn-light waves-effect">
            3
          </button>

          <button name="0" onClick={handleClick} type="button" value="0" class="btn btn-light waves-effect">
            0
          </button>
          <button name="." onClick={handleClick}
            type="button"
            class="decimal function btn btn-secondary"
            value="."
          >
            .
          </button>
          <button name="" onClick={handleClear}
            type="button"
            class="all-clear function btn btn-danger btn-sm"
            value="all-clear"
          >
            AC
          </button>

          <button name="" onClick={handleCalculate}
            type="button"
            class="equal-sign operator btn btn-default"
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
