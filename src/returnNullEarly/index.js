const doSomeExpensiveCalculations = () => Math.PI.toFixed(3);

const ReturnNullEarly = ({ shouldRender }) => {
  /* if (!shouldRender) {
    return null;
  } */

  const valueToSquare = doSomeExpensiveCalculations();

  /*
    By not checking shouldRender until here in the return block,
    the component always has to run doSomeExpensiveCalculations,
    even when we just want to return null based on the value of a prop.
    This performance hit can be avoided by conditional returning null 
    early as shown above.
  */
  return shouldRender ? (
    <section>
      <h2>Return Null Early When Possible</h2>
      <h3>Example...</h3>
      <div>{valueToSquare} x {valueToSquare} = {valueToSquare * valueToSquare}</div>
    </section>
  ) : null;

  /* Then we can just return without the conditional here:
  return (
    <section>
      <h2>Return Null Early When Possible</h2>
      <h3>Example...</h3>
      <div>{valueToSquare} x {valueToSquare} = {valueToSquare * valueToSquare}</div>
    </section>
  );  
  */
};

export default ReturnNullEarly;