import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

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
      <h1>新着スレッド</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id}>
            <a href={`/threads/${thread.id}`}>{thread.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
