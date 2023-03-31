import {useState} from "react";

const initialCounters = [
    {
        id: 1,
        value: 1
    },
];

function CounterWithAddAndDelete() {
    const [counts, setCounts] = useState(initialCounters);
    const plus = (id) => {
        const updateCounts = counts.map(item => item.id === id
            ? {...item, value: item.value + 1}
            : item);
        setCounts(updateCounts);
    };

    const minus = (id) => {
        const updateCounts = counts.map(item => item.id === id
            ? {...item, value: item.value - 1}
            : item);
        setCounts(updateCounts);
    };

    const addCounter = () => {
        const newCount = {
            id: (counts[counts.length - 1].id + 1),
            value: 0
        }

        setCounts([...counts, newCount])
    };

    const deleteCounter = () => {
        if(counts.length - 1 > 0){
            counts.pop();
            setCounts([...counts])
        }
    }

    return (
        <div>
            <h2 style={{color: 'orangered'}}>Counter app</h2>
            <hr/>
            <button onClick={addCounter}>Add counter</button>
            <button onClick={deleteCounter}>Delete counter</button>
            <ul>
                {counts.map(item => (
                    <li key={item.id}>
                        <button onClick={() => plus(item.id)}>Plus</button>
                        {item.value}
                        <button onClick={() => minus(item.id)}>Minus</button>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}

export default CounterWithAddAndDelete;