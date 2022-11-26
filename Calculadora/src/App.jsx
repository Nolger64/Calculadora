import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {


  const [result, setResult] = useState("");
  const [result1, setResult1] = useState("");
  const [activo, setActivo] = useState(false);
  let [operacion, setOperacion] = useState(0);
  let activoEstilo = "";

  if (activo) {
    activoEstilo = {
      btn: {
        color: "black",
        backgroundColor: "#FFF6BF",
      },
      btnResultado: {
        backgroundColor: "#F7A4A4",
      },
    };
  }
  function Operar() {
    switch (operacion) {
      case 1:
        setResult(parseInt(result) + parseInt(result1) + "");
        break;
      case 2:
        setResult(parseInt(result) - parseInt(result1) + "");
        break;
      case 3:
        setResult(parseInt(result) * parseInt(result1) + "");
      default:
        break;
    }
  }
  return (
    <div className="calculadora">
      <div className="input"><p>{result}</p>{activo && <p className="placeHolder">{result1}</p>}</div>
      <div className="numerosGrid">
        <button
          className="btn"
          onClick={() => {
            setResult(result + "1");
          }}
        >
          1
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "2");
          }}
        >
          2
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "3");
          }}
        >
          3
        </button>
        <button
          className="btn"
          style={activoEstilo.btn}
          onClick={() => {
            setResult1(result);
            setResult("");
            setActivo(true);
            setOperacion(1);
          }}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "4");
          }}
        >
          4
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "5");
          }}
        >
          5
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "6");
          }}
        >
          6
        </button>
        <button
          style={activoEstilo.btn}
          className="btn"
          onClick={() => {
            setResult1(result);
            setResult("");
            setActivo(true);
            console.log(activo);
            setOperacion(2);
          }}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "7");
          }}
        >
          7
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "8");
          }}
        >
          8
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "9");
          }}
        >
          9
        </button>
        <button
          style={activoEstilo.btn}
          className="btn"
          onClick={() => {
            setResult1(result);
            setResult("");
            setActivo(true);
            console.log(activo);
            setOperacion(3);
          }}
        >
          *
        </button>
        <button
          style={activoEstilo.btn}
          className="btn"
          onClick={() => {
            setResult("");
            setActivo(false);
          }}
        >
          clr
        </button>
        <button
          className="btn"
          onClick={() => {
            setResult(result + "0");
          }}
        >
          0
        </button>
        <button
          style={activoEstilo.btnResultado}
          id="boton"
          className="btn"
          onClick={() => {
            Operar();
            setActivo(false);
          }}
        >
          =
        </button>
        <button
          style={activoEstilo.btn}
          className="btn"
          onClick={() => {
            if (activo) {
              setResult(result1.substring(0, result1.length - 1));
            } else {
              setResult(result.substring(0, result.length - 1));
            }
          }}
        >
          Borrar
        </button>
      </div>
    </div>
  );
}

export default App;
