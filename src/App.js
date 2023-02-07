// import logo from './logo.svg';
import "./App.css";
import Greet from "./components/functionalComponent"; //default export using default function
import { Greet1 } from "./components/ArrowFuncAndNamedexp"; //named export using arrow function
import Welcome from "./components/classComponent"; //class component
import Hello from "./components/jsx"; //how to write jsx
import P from "./components/propsFunctionComponent"; //sending property using props function based component
import Welcome1 from "./components/propsClassComponent"; //sending property using props Class based component
import Message from "./components/stateClassComponent"; //
import Counter from "./components/setStateClassComponent";
import P1 from "./components/destructuringPropsFunc";
import Welcome2 from "./components/destructuringPropsClass";
import FunctionClick from "./components/EventHandlingFunc";
import ClassClick from "./components/EventHandlingClsaa";

function App() {
  return (
    <div className="App">
      <Greet />
      <Greet1 />
      <Welcome />
      <Hello />
      <P name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </P>
      <P name="Clerk" heroName="Superman">
        <button>Action</button>
      </P>
      <P name="Daina" heroName="Wonder Women" />
      <Welcome1 name="Bruce" heroName="Batman" />
      <Welcome1 name="Clerk" heroName="Superman" />
      <Welcome1 name="Daina" heroName="Wonder Women" />
      <Message />
      <Counter />
      <P1 name="Daina" heroName="Wonder Women" />
      <Welcome2 name="Bruce" heroName="Batman" />
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
