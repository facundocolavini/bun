import React from 'react';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));


const App = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    );
}


root.render(<App />);


