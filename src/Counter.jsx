import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
