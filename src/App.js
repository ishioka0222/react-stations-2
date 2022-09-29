import './App.css';
import { useState, useEffect } from 'react';
import Home from './routes/Home';

function App() {
  const baseUrl = 'https://railway-react-bulletin-board.herokuapp.com';
  const endpoint = '/threads';

  const [threads, setThreads] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${baseUrl}${endpoint}`);
      const data = await response.json();
      setThreads(data);
    })();
  }, []);

  return (
    <>
      <nav className="bg-green-400 text-white p-5">
        <div className="flex justify-between">
          <div className="text-2xl">
            <a href="/">掲示板</a>
          </div>
          <div className="underline">
            <a href="/">スレッドをたてる</a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto w-6/12">
        <Home />
      </div>
    </>
  );
}

export default App;
