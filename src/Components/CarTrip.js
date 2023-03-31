import {useRef, useState} from "react";
import carPicture from './7f5i8lsr.jpg'

function CarTrip() {
    const inputTank = useRef(0);
    const inputLitresPer100km = useRef(0);
    const inputDistance = useRef(0);
    const [result, setResult] = useState('No data');

    const calculateCarTrip = () => {
        const tank = +inputTank.current.value;
        const litresPer100km = +inputLitresPer100km.current.value;
        const distance = +inputDistance.current.value;
        const needLitres = litresPer100km * distance / 100;

        if (tank !== 0 && litresPer100km !== 0 && distance !== 0) {
            if (needLitres > tank) {
                setResult('There\'s not enough fuel');
                pictureMove(distance, ((tank * 100) / litresPer100km));
            }
            if (needLitres <= tank) {
                setResult('Everything is good. There\'s enough fuel');
                pictureMove(570, 570);
            }
        }
        if (tank === 0 || litresPer100km === 0 || distance === 0) setResult('No some data');
    }


    const [position, setPosition] = useState(0);

    const pictureMove = (distanceNeedToMove, distanceMove) => {
        if (distanceNeedToMove === 570 || distanceMove === 570) {
            setPosition(position + 570);
            return;
        }
        if (distanceNeedToMove === 0 || distanceMove === 0) {
            setPosition(0);
            return;
        }
        setPosition(position + ((570 * distanceMove) / distanceNeedToMove));// 570 px max
    }

    return (
        <div>
            <hr/>
            <h2 style={{color: 'orangered'}}>Car trip app</h2>
            <input ref={inputTank}/>Enter tank (Liters)
            <br/><input ref={inputLitresPer100km}/>Enter litres on 100 km (Kilometers)
            <br/><input ref={inputDistance}/>Enter distance (Kilometers)
            <br/>
            <button onClick={calculateCarTrip}>Calculate</button>
            <button onClick={() => pictureMove(0, 0)}>Reset the car</button>
            <br/>{result}
            <br/>
            <img src={carPicture} alt="BigCo Inc. logo" style={{width: 100, position: 'relative', left: position}}/>
            <br/>|____________________________________________________________________________________________________|
            End of the route
            <hr/>
        </div>);
}

export default CarTrip;