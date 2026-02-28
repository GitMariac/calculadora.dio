import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')

  const inserirNumero = (num) => {
    const operadores = ['+', '-', '*', '/'];

    setDisplay(prev => {
      const ultimo = prev.slice(-1);

      // Caso inicial 0
      if (prev === '0') {
        if (num === '-') return '-'; // permite negativo inicial
        if (operadores.includes(num)) return prev; // bloqueia + * /
        return num; // substitui 0 por número
      }

      // Se último caractere é operador
      if (operadores.includes(ultimo)) {
        // Permite "-" para número negativo
        if (num === '-') return prev + num;

        // Bloqueia outros operadores
        if (operadores.includes(num)) return prev;
      }

      if (num === '.') {
        const partes = prev.split(/[\+\-\*\/]/);
        const ultimoNumero = partes[partes.length - 1];

        if (ultimoNumero.includes('.')) {
          return prev; // bloqueia segundo ponto
        }
      }

      if (num === ',') {
        const partes = prev.split(/[\+\-\*\/]/);
        const ultimoNumero = partes[partes.length - 1];

        if (ultimoNumero.includes(',')) {
          return prev; // bloqueia segunda vírgula
        }
      }

      return prev + num;
    });
  };


  const limparDisplay = () => setDisplay('0');

  const calcularResultado = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Erro");
    }
  }


  return (
    <>
      <div className="calculadora">
        <div className="display">
          <span className="display-valor">{display}</span>
        </div>
        <div className="teclado">
          <button className="tecla" onClick={limparDisplay}>CC</button>
          <button className="tecla" onClick={() => inserirNumero('/')}>/</button>
          <button className="tecla" onClick={() => inserirNumero('*')}>*</button>
          <button className="tecla" onClick={() => inserirNumero('-')}>-</button>

          <button className="tecla" onClick={() => inserirNumero('7')}>7</button>
          <button className="tecla" onClick={() => inserirNumero('8')}>8</button>
          <button className="tecla" onClick={() => inserirNumero('9')}>9</button>
          <button className="tecla" onClick={() => inserirNumero('+')}>+</button>

          <button className="tecla" onClick={() => inserirNumero('4')}>4</button>
          <button className="tecla" onClick={() => inserirNumero('5')}>5</button>
          <button className="tecla" onClick={() => inserirNumero('6')}>6</button>
          <button className="tecla" onClick={() => inserirNumero('.')}>.</button>

          <button className="tecla" onClick={() => inserirNumero('1')}>1</button>
          <button className="tecla" onClick={() => inserirNumero('2')}>2</button>
          <button className="tecla" onClick={() => inserirNumero('3')}>3</button>
          <button className="tecla btn-igual" onClick={calcularResultado}>=</button>

          <button className="tecla btn-zero" onClick={() => inserirNumero('0')}>0</button>
          <button className="tecla" onClick={() => inserirNumero(',')}>,</button>


        </div>
      </div>

    </>

  );

}
export default App
