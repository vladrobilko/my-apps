import './App.css';
import AlgebraicExpressions from "./Components/AlgebraicExpressions";
import CarTrip from "./Components/CarTrip";
import CounterWithAddAndDelete from "./Components/CounterWithAddAndDelete";
import ToDoWithFirebase from "./Components/ToDoWithFirebase";

function App() {

    return (
        <div className='container'>
            <h1 style={{ color: 'forestgreen' }}>My small apps with react</h1>
            <ToDoWithFirebase/>
            <AlgebraicExpressions/>
            <CarTrip/>
            <CounterWithAddAndDelete/>
        </div>
    );
}

export default App;
