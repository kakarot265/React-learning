/*import React, { useReducer } from 'react'

const reducer = (state, action) =>{
    if(action.type === 'INC'){
        return {count: state.count+1}
    }

    
    else if(action.type === 'DEC'){
        return {count: state.count-1}
    }
    else{
        throw new Error('Unsupported')
    }
}

const ReducerFxn = () =>{

    const [state, dispatch] = useReducer(reducer, {count:0})

    

    const handleClickInc = () =>{
        dispatch({type:'INC'})
    }

    const handleClickDec = () =>{
        dispatch({type:'DEC'})
    }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleClickInc}>+
      </button>

      <button onClick={handleClickDec}>-</button>
    </div>
    )
}

export default ReducerFxn;
*/
