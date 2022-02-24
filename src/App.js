import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { Component } from "react";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;