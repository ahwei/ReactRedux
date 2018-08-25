import React from "react";
import TodoHead from "../../containers/TodoHead_container";
import TodoBody from "../../containers/TodoBody_container";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <TodoHead />
        <TodoBody />
      </div>
    );
  }
}
