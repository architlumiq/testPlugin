import React, { Component } from "react";

class DedupeeComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>Hello World {this.props.data}</div>;
  }
}
export default DedupeeComponent