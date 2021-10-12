import React from "react";
export default class Kalkulacka extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operace: ["+", "-", "*", "/", "mocnina", "1/x", "sin"],
    };
  }
  renderTlacitko(_operace) {
    return (
      <span class={_operace}>
        <button>{_operace}</button>
      </span>
    );
  }
  render() {
    return <div>{this.state.operace.map((a) => this.renderTlacitko(a))}</div>;
  }
}
