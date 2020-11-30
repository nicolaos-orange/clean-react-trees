import UnnecessarySplits from './unnecessarySplits';
import SingleUseJSXVariables from './singleUseJSXVariables';
import DestructurePropsinDefinition from './destructurePropsinDefinition';
import ReturnNullEarly from './returnNullEarly';
import OpaqueProps from './opaqueProps';

const App = () => (
  /*
    We can just use a React fragment rather than
    a div or other HTML element to satisfy React's
    "return one parent" rule. That's one less HTML
    element to worry about stlying, and one less
    elemnent React has to manage updates for.
  */
  // <>
 <div>
    <h1>Maintaining Clean React 🌴🌲🌳</h1>
    <UnnecessarySplits />
    <SingleUseJSXVariables />
    <DestructurePropsinDefinition greeting="Hello" name="Bladen" time={Date.now()} />
    <ReturnNullEarly shouldRender={true} />
    <OpaqueProps someObj={{ 
      exampleDessert: "Ice Cream",
      exampleMeal: "Baked Potatoes",
    }}/>
  </div>
  // </>
);

export default App;
