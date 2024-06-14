@import {usestates} from "react"

class MyComponent extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      count: 0, // Example state variable
    };
  }

  // Define a function to update the state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      <button onClick={setColor()} onmouseOver = {colorUpdate}> click me </button>
      </div>
    );
  }
}

const [color, setColor] = usestate("olive");
const {update, colorUpdate} = [null, "yellow"];
export default MyComponent;
