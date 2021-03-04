import React, { useEffect, useState } from 'react';

const EMOJIS = ['💻', '👍', '😃'];

const App: React.FC = () => {
  const [emoji, setEmoji] = useState(EMOJIS[0]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setEmoji((current) => {
        const next = EMOJIS.indexOf(current) + 1;
        return next === EMOJIS.length ? EMOJIS[0] : EMOJIS[next];
      });
    }, 2000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <main className="flex justify-center items-center h-screen p-8 dark:bg-gray-900">
      <div className="px-8 py-4 shadow-xl dark:shadow-none rounded-lg dark:bg-gray-800">
        <h1 className="font-mono font-bold text-2xl text-center space-x-4">
          <span
            key="title"
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300"
          >
            My single-page application
          </span>
          <span key="emoji">{emoji}</span>
        </h1>
      </div>
    </main>
  );
};

export default App;
