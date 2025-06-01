import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect runs after the component renders
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only runs the effect if count changes

  return (
    <div className="p-4">
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me
      </button>
    </div>
  );
}

export default Counter;