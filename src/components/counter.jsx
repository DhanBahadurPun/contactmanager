import React, { Component } from "react";
class Counter extends Component {
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }
  // state = {
  //   value: this.props.counter.value,
  //   imageUrl: "http://picsum.photos/200",
  //   tags: ["tags1", "tags2", "tags3"]
  // };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // handleIncrement = product => {
  //   console.log("Increment clicked", this);
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log("props", this.props.counter);
    console.log("Counter - Rendered");
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <div>
        {/*<img src={this.state.imageUrl} alt="" />*/}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*this.state.tags.length === 0 && "please create a new tag!"*/}
        {/*this.renderTags()*/}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
}

export default Counter;
