import React, { Component } from "react";

export default class TodoHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue: ""
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelAddTodo = this.handelAddTodo.bind(this);
  }
  handelChange(evt) {
    const changeValue = evt.target.value;
    this.setState({
      addValue: changeValue
    });
  }
  handelAddTodo() {
    const { actions } = this.props;
    const { addValue } = this.state;
    actions.AddTodo(addValue);
  }
  render() {
    const { todo } = this.props;
    const { addValue } = this.state;
    const List = todo.get("List").toJS();
    return (
      <div>
        <h1>{todo.get("Title")}</h1>
        <h2>You have {List.length} Todos</h2>
        <input value={addValue} onChange={this.handelChange} />
        <button onClick={this.handelAddTodo}>Add</button>
      </div>
    );
  }
}
