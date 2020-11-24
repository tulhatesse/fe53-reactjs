// import Baitap1 from "./Baitap1";
// import Baitap2 from "./Baitap2";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handling-events";
// import ExampleHandlingEvent from "./handling-events/example";
import State from "./state";
import ExampleCar from "./example-car";

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElements />
      <hr />
      <HandlingEvent />
      <hr />
      {/* <ExampleHandlingEvent /> */}
      <State />
      <hr />
      <ExampleCar />
    </div>
  );
}

export default App;
