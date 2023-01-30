import React, { useReducer } from "react";
import "./App.css";
import reducer, { initialState } from "../reducers/index";
import {
  addOne,
  applyNumber,
  saveMemo,
  sendMemo,
  clearDisplay,
  clearMemo,
  changeOperation,
} from "../actions";
import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => dispatch(saveMemo())} />
              <CalcButton value={"MR"} onClick={() => dispatch(sendMemo())} />
              <CalcButton value={"MC"} onClick={() => dispatch(clearMemo())} />
            </div>

            <div className="row">
              <CalcButton
                value={1}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={2}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={3}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={4}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={5}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={6}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={7}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={8}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
              <CalcButton
                value={9}
                onClick={(e) => dispatch(applyNumber(Number(e.target.value)))}
              />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => dispatch(changeOperation("+"))}
              />
              <CalcButton
                value={"*"}
                onClick={() => dispatch(changeOperation("*"))}
              />
              <CalcButton
                value={"-"}
                onClick={() => dispatch(changeOperation("-"))}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                value={"CE"}
                onClick={() => dispatch(clearDisplay())}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
