import { useEffect } from 'react';
import './App.css';

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className='App'>
            <p>working</p>
        </div>
    );
}

export default App;
