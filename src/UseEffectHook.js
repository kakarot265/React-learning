import React, { useEffect, useState } from 'react'

// useEffect hook is applied betwwen the state change of a componenet during it's lifecycle
const UseEffectHook= () =>  {

    const[isVisible, setVisible] = useState[true]
    const[count, setCount] = useState[0];

    useEffect(() =>{
        // Here the dependency array is empty, which this hook is for the whole parent component.
        // the below console.log runs when component gets mounted
        console.log("componenet is mounting")
        
        // Below function is returned when the component is unmounted
        return function (){
            console.log("Unmounted")
        }
    }, [])

    useEffect(()=>{
       console.log("P mounted")

       return function (){
        console.log("P unmounted")
        }

    }, [isVisible])

    useEffect(()=>{
        console.log("...mounted")

        // Here when the count state would be updated, The initial state od the component would first be removed and then new state woudl get mounted
 
        return function (){
         console.log("...unmounted")
         }
 
     }, [count])
 


  return (
    <div>
        
        {isVisible? <p>Conditional Rendering</p>: <></> }
        <p>{count}</p>
      <button onClick={()=> setVisible(!isVisible)}>Toggle</button>
      <button onClick={() => setCount(count+1)}>Incr</button>
    </div> 
  )
}

export default UseEffectHook
