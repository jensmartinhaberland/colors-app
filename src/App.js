import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[2]} />
      </div>
    );
  }
}

export default App;