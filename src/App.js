import './App.css';
import AlgebraicExpressions from "./Components/AlgebraicExpressions";
import CarTrip from "./Components/CarTrip";
import CounterWithAddAndDelete from "./Components/CounterWithAddAndDelete";
import FirebaseToDo from "./Components/FirebaseToDo";

function App() {

    return (
        <>
            <h1 style={{ color: 'forestgreen' }}>My small apps with react</h1>
            <FirebaseToDo/>
            <AlgebraicExpressions/>
            <CarTrip/>
            <CounterWithAddAndDelete/>
        </>
    );
}

export default App;
