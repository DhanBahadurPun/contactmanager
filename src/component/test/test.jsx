import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "",
    body: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => this.setState({
    title: json.title,
    body: json.body
  }))
  }
 /* componentWillMount() {
    console.log("component will mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUpdate(){
    console.log("component will update");
  }

  componentWillReceiveProps(nextProps,nestState){
    console.log("component will receive props")
  }
   static getDerivedStateFromProps(nextProps, prevState) {
     return null //return state rather than update
   }

   getSnapshotBeforeUpdate(prevProps,prevState){
     console.log("get SnapshotBeforeUpdate.....")
   }*/
  render() {
    const {title,body}=this.state
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
