'use client';

import { useState } from 'react';

export default function MultiCounter() {
  const [counters, setCounters] = useState([0, 0, 0]); 

  const increment = (index:number) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);
  };

  const decrement = (index:number) => {
    const newCounters = [...counters];
    newCounters[index]--;
    setCounters(newCounters);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {counters.map((count, index) => (
        <div
          key={index}
          className="p-6 bg-gray-100 rounded-lg shadow-md text-center w-64"
        >
          <h2 className="text-xl font-semibold mb-4">Counter {index + 1}</h2>
          <div className="flex justify-center gap-4 mb-2">
            <button
              onClick={() => decrement(index)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              -
            </button>
            <span className="text-2xl">{count}</span>
            <button
              onClick={() => increment(index)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
