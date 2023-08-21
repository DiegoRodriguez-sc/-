import React, { useEffect, useState } from 'react'

const Count = () => {

    const startDate = new Date("2023-01-16");
    const millisecondsPerDay = 24 * 60 * 60 * 1000; 
  
    const currentTime = new Date();
    const timeDifference = currentTime - startDate;
    const daysPassed = Math.floor(timeDifference / millisecondsPerDay);
  
    const [value, setValue] = useState({ days: daysPassed }); // Initialize with the calculated value
  
    useEffect(() => {
      const timer = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = currentTime - startDate;
        const daysPassed = Math.floor(timeDifference / millisecondsPerDay);
  
        setValue({ days: daysPassed });
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
  
    }, []);
  
    return (
      <span className="countdownCustom font-mono text-8xl">
        <span style={{ "--value": value.days }}></span>
      </span>
    );
  };

export default Count    