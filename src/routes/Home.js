import { useState, useEffect } from 'react';

function Home() {
  const endpoint = 'https://railway-react-bulletin-board.herokuapp.com/threads';

  const [threads, setThreads] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setThreads(data);
    })();
  }, []);

  return (
    <>
      <h1 className="text-2xl">新着スレッド</h1>
      <ul>
        {threads.map((thread) => (
          <li
            key={thread.id}
            className="bg-white border p-3 rounded border-gray-400"
          >
            <a href={`/threads/${thread.id}`}>{thread.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
