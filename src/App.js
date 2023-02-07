import React, { useEffect, useState } from 'react';
import Clock from 'Clock/Clock';
import './App.css';

const App = () => {

  const currentDate = new Date();
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)

  const setClock = () => {
    setSecond(currentDate.getSeconds() / 60)
    setMinute((second + currentDate.getMinutes()) / 60)
    setHour((minute + currentDate.getHours()) / 12);
  }

  useEffect(() => {
    setClock()
    // eslint-disable-next-line
  }, [currentDate, second, minute])

  setInterval(() => {
    setClock()
  }, 1000);

  return (
    <Clock 
      second={second}
      minute={minute}
      hour={hour} 
    />
  );
}

export default App;
