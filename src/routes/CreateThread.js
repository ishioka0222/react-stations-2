import { Link, useNavigate } from 'react-router-dom';

function CreateThread() {
  const navigate = useNavigate();

  const endpoint = 'https://railway-react-bulletin-board.herokuapp.com/threads';

  const postThreadTitle = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title }),
    });
    navigate('/');
  };

  return (
    <>
      <h1 className="text-2xl">スレッド新規作成</h1>
      <form>
        <div className="mb-4">
          <input
            className="border rounded w-full p-3"
            id="title"
            type="text"
            placeholder="スレッドタイトル"
          />
        </div>
        <div className="flex justify-between">
          <Link className="text-blue-500 hover:underline" to="/">
            Topに戻る
          </Link>
          <button
            className="bg-green-400 text-white p-3 rounded"
            onClick={postThreadTitle}
          >
            作成
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </>
  );
}

export default CreateThread;
