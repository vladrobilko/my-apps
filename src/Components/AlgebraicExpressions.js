import {useState} from "react";
import {useRef} from 'react';

function AlgebraicExpressions() {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [operand, setOperand] = useState('+');
    const [result, setResult] = useState(0);
    const [message, setMessage] = useState('Enter the answer');
    const [countRightAnswers, setCountRightAnswers] = useState(0);

    const generateExpressionAndCalculate = () => {
        const number1 = randomNumberInRange(-30, 30);
        setNumberOne(number1);
        const number2 = randomNumberInRange(-30, 30)
        setNumberTwo(number2);

        const random = randomNumberInRange(1, 3);
        if (random === 1) {
            setOperand('-');
            setResult(number1 - number2);
        }
        if (random === 2) {
            setOperand('*');
            setResult(number1 * number2);
        }
        if (random === 3) {
            setOperand('/');
            setResult(number1 / number2);
        }
    }

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const inputRef = useRef(null);

    const handleClick = () => {
        if (+inputRef.current.value === result) {
            setMessage('It is true, you are good!!!');
            setCountRightAnswers(countRightAnswers + 1);
            generateExpressionAndCalculate();
        } else {
            setMessage(`It is wrong! Right answer is ${result}`);
            setCountRightAnswers(countRightAnswers - 1);
            generateExpressionAndCalculate();
        }

    }

    return (
        <div>
            <hr/>
            <h2 style={{ color: 'orangered'}}>Checking your algebraic knowledge app</h2>
            <button onClick={generateExpressionAndCalculate}>Generate expression</button>
            <br/>({numberOne}) {operand} ({numberTwo}) = ?
            <br/><input ref={inputRef} type="number"/>
            <button onClick={handleClick}>Check</button>
            <br/><h2 style={{ color: 'orangered' }}>User points: {countRightAnswers}</h2>
            <h2>Message:{message}</h2>
            <hr/>
        </div>
    );
}

export default AlgebraicExpressions;