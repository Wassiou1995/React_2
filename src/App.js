import React, { Component } from "react";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    color: "black" ,
    clicks: 0,
    show: true
  }
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 4 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 3 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <div style={{ background: "#f0f0f0f" }}>
          <h3 style={{ color: this.state.color }}>Wassim Color</h3>
          <p style={{ color: "#706c61" }}> This is a text...</p>
        </div>

        <div>
          <button onClick={() => this.setState({ color: "red" })}> Red </button>
          <button onClick={() => this.setState({ color: "green" })}>
            {" "}
            Green{" "}
          </button>
        </div>
        <div>
        <button onClick={this.IncrementItem}>Click to increment by 4 </button>
        <button onClick={this.DecreaseItem}>Click to decrease by 3</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
      </div>
    );
  }
}



export default Page;
