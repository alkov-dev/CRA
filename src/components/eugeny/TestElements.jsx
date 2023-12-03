import React from 'react'

const TestElements = () => {
 const [counter, setCounter] = React.useState(0)
  
 return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(prev => prev + 1)}> Up</button>
    <button disabled data-testid="button-down" onClick={() => setCounter(prev => prev - 1)}>Down</button>
 </>
    )
  }
  
export default TestElements