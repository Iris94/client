'use client'

import React, { useState } from 'react';
import { DisplayData, EnterData } from ".";

const numOfInputFields = 10;

export default function NumbersSection() {
  const [sortedNumbers, setSortedNumbers] = useState([]); // State to hold sorted numbers

  return (
    <div className="h-5/6 w-full flex flex-col">
      <EnterData
        numOfInputFields={numOfInputFields}
        setSortedNumbers={setSortedNumbers} // Pass the state setter function
      />
      <DisplayData
        numOfInputFields={numOfInputFields}
        sortedNumbers={sortedNumbers} // Pass the sorted numbers to DisplayData
      />
    </div>
  );
}
