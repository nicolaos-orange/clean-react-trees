import OpaquePropsChild from './child';

const OpaqueProps = ({
  someObj,
}) => (
  <section>
    <h2>Avoid Opaque Props</h2>
    <h3>Example...</h3>
    {/* 
      Spreading someObj onto a child component is an anti-pattern
      because we've now coupled the child component's props to this
      component's props. A developer working on the child component
      now has to go look at this component's parents to understand
      what props are being passed here.
      
      There's also a good chance that this will result in extra unneeded
      properties being sent to OpaqueChildProps. If the child component
      is changed and only needs some properties of someObj, this might
      not get updated or this component's parent might add properties to
      someObj that the child doesn't need.
    */}
    <OpaquePropsChild {...someObj} />
    {/* 
      A better approach would be to explicitly name each of the props
      being passed down to the child, improving readabililty and reducing
      coupling.
    */}
    {/*
      <OpaquePropsChild
        exampleDessert={someObj.exampleDessert}
        exampleMeal={someObj.exampleMeal}
      />    
    */}
  </section>
);

/*
  Compounding the problem is the fact that these objects are often
  not flushed out in propTypes, instead just marked as "object".
OpaqueProps.propTypes = {
  someObj: PropTypes.object;
};
*/

/*
  If, for some reason, you cannot avoid spreading a prop on a child, at
  least make sure the prop is fully documented in propTypes using "shape".
OpaqueProps.propTypes = {
  someObj: PropTypes.shape({
    exampleDessert: PropTypes.string,
    exampleMeal: PropTypes.string,
  });
};
*/

export default OpaqueProps;