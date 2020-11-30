const DestructurePropsInDefinition = (props) => {
  // These props can be destructued in the above definition, see example below
  const {
    name,
    time,
    greeting,
  } = props;
  
  return (
    <section>
      <h2>Destructure Props in Definition</h2>
      <h3>Example...</h3>
      <div>{greeting} {name}, the time is {new Date(time).toTimeString()}</div>
    </section>
  );
};

/*
  Destructuting here is a bit more conscise, and in many
  cases (including this one) allows us to use the implicit
  return syntax to make the code even simpler.
const DestructurePropsInDefinition = ({ 
  name,
  time,
  greeting,
}) => (
  <section>
    <h2>Destructure Props in Definition</h2>
    <h3>Example...</h3>
    <div>{greeting} {name}, the time is {new Date(time)}</div>
  </section>
);
*/

export default DestructurePropsInDefinition;