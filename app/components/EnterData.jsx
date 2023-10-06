'use client'

import Input from "./reusable/Input"
import Button from "./reusable/Button"


import { useState } from "react"


export default function EnterData ( {numOfInputFields, setSortedNumbers} ) {
    const [inputValues, setInputValues] = useState(Array(numOfInputFields).fill(""));
     

    const handleInputChange = (index, value) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = parseFloat(value); // Parse the input value as a float
        setInputValues(updatedValues);
      };
       // Arrow function that will send numbers trough API to backend
    //____________________________USE STATE part of the code________________________________//



    const handleSortData = async () => {
        try {
          const response = await fetch('http://localhost:5000/sort-numbers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ numbers: inputValues }),
          });
      
          if (response.ok) {
            const data = await response.json();
            // Update the state in NumbersSection with the sorted numbers
            setSortedNumbers(data.sortedNumbers);
            console.log(data.sortedNumbers);
          } else {
            console.error('Server responded with an error');
          }
        } catch (error) {
          console.error('Error sending data to server:', error);
        }
      };
      
    //________________Sort Data and send it to BackEnd_______________________//      






    const inputComponent = []  //Array for 10 input fields

    for (let i = 0; i < numOfInputFields; i++) {
        inputComponent.push(
        <Input
        key={i}
        value={inputValues[i]}
        onChange={(e) => handleInputChange(i, e.target.value)} />)
        
    } // Loop for 10 arrays
    //__________________________-Loop Part of the code______________________//





    return (
        <div className="h-1/2 w-full flex-col justify-center items-center p-5 flex">
            <form className="w-5/6 h-1/2 flex gap-3 lg:flex-nowrap flex-wrap justify-evenly items-center">
                {inputComponent}
            </form>
            <div className="h-1/2 w-5/6 flex lg:gap-5 gap-2 justify-center items-end">
                <Button 
                buttonText="Fill Random Data"
                /> 

                <Button 
                buttonText="Sort Data" 
                handlePrompt={handleSortData}
                />
            </div>
        </div>
    )
}