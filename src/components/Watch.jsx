import React, { useEffect, useState } from 'react'
import { getTime } from '../helpers/helper';

const Watch = () => {

    const dateBirthday = new Date("Fri Jan 13 2023");

    const [value, setValue] = useState({});
    useEffect(() => {
      const timer = setTimeout(() => {
       
        const currenTime = getTime(dateBirthday);
        setValue(currenTime);

        if (currenTime.time <= 1) {
            clearInterval(timer);
        }

      }, 1000)

    }, [value])

  return (
    <div className="App">
    <div className="flex gap-5">
      <div>
        <span className="countdownCustom font-mono text-4xl">
          <span style={{"--value":value.days}}></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":value.hours}}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":value.minutes}}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":value.seconds}}></span>
        </span>
        sec
      </div>
    </div>
  </div>
  )
}

export default Watch    