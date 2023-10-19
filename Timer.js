import React, { useEffect, useState } from 'react'

const Timer =() => {

    // The parent component renders only once. After that the child components inside it re render accordingly

    const[time, setTime] = useState[0];

    useEffect(()=>{
        setTimeout(()=>{
             setTime(time+1);
        }, 1000)
    }, [count]) 

     /*   useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [time]); // 
 */

  //In the above hook we have to cleanInterval before removing the component and mounting it again (basically updating it), we have to clean the interval to prevent the intervals from getting stacked up in the memory. To avoid bugs and issues

  return (
    <div>
      <h1>StopWatch</h1>
      <p>Current time is {time}</p>
    </div>
  )
}

