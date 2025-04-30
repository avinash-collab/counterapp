'use client';

import { useState } from 'react';

export default function MultiCounter() {
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleIncrement = () => {
    if (activeIndex === null) return;
    const newCounters = [...counters];
    newCounters[activeIndex]++;
    setCounters(newCounters);
  };

  const handleDecrement = () => {
    if (activeIndex === null) return;
    const newCounters = [...counters];
    newCounters[activeIndex]--;
    setCounters(newCounters);
  };

  const handleAddCounter = () => {
    setCounters([...counters, 0]);
    setActiveIndex(counters.length); 
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-6">Multi Counter App</h1>

      <div className="flex flex-wrap gap-6 justify-center mb-6">
        {counters.map((count, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md w-48 cursor-pointer ${
              activeIndex === index ? 'bg-blue-200' : 'bg-gray-100'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <h2 className="text-lg font-semibold mb-2">Counter {index + 1}</h2>
            <p className="text-3xl">{count}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          - Decrement
        </button>
        <button
          onClick={handleAddCounter}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          + Add Counter
        </button>
      </div>

      {activeIndex !== null && (
        <p className="mt-4 text-sm text-gray-600">
          Active Counter: {activeIndex + 1}
        </p>
      )}
    </div>
  );
}
