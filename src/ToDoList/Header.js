import { useState, useEffect } from 'react';



function Header() {
   
    const [count, setCount] = useState(0);
    
    useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount+1)
      }, 1000);
    }, [])
   
  
  return (
      <>
          <h1> Todo List</h1>
          <p>You have spent <span style={timerStyle}>{count} </span>seconds in this page</p>
         
      </>
  )
}

const timerStyle = { 
    color: 'red',
    fontSize : 30

}

export default Header