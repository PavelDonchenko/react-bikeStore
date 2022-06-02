import React, {useState} from 'react';
import Context from './context';

function ContextProvider({children}){
  const [color, setColor] = useState(1);
  const [size, setSize] = useState(1);
  const [count, setCount] = useState(1);

  const providerValue = {
      color,
      size,
      count,
      setSize,
      setColor,
      setCount,
  }
  return <Context.Provider value = {providerValue}>{children}</Context.Provider>
}

export default ContextProvider;
