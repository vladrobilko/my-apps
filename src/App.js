import './App.css';
import AlgebraicExpressions from "./Components/AlgebraicExpressions";
import CarTrip from "./Components/CarTrip";
import CounterWithAddAndDelete from "./Components/CounterWithAddAndDelete";
import ToDoWithFirebase from "./Components/ToDoWithFirebase";
import background from './background.jpg';


function App() {

    return (
        <div style={{backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'  }}>
            <div className='container'>
            <h1 class="text-center" style={{color: 'forestgreen'}}>My small apps with react</h1>
            <ToDoWithFirebase/>
            <AlgebraicExpressions/>
            <CarTrip/>
            <CounterWithAddAndDelete/>
            </div>
        </div>
    );
}

export default App;
