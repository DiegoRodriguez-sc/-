import React, { useEffect, useState } from 'react'

const Watch = () => {

    const [value, setValue] = useState(30)

    useEffect(() => {
      const timer = setTimeout(() => {
        setValue((v) => (v <= 0 ? 30 : v - 1))
      }, 1000)
  
      return () => {
        clearTimeout(timer)
      }
    }, [value])

    
  return (
    <div className="App">
    <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":"10;"}}></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":10}}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":10}}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{"--value":value}}></span>
        </span>
        sec
      </div>
    </div>
  </div>
  )
}

export default Watch    