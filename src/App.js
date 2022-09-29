import './App.css';
import { useState, useEffect } from 'react';
import Home from './routes/Home';
import CreateThread from './routes/CreateThread';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
      <BrowserRouter>
        <nav className="bg-green-400 text-white p-5">
          <div className="flex justify-between">
            <div className="text-2xl">
              <Link to="/">掲示板</Link>
            </div>
            <div className="hover:underline">
              <Link to="/thread/new">スレッドをたてる</Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto w-6/12">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/thread/new" element={<CreateThread />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
