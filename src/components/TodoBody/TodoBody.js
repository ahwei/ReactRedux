import React, { Component } from "react";

export default class TodoBody extends Component {
  constructor(props) {
    super(props);
    this.handelDeleteTodo = this.handelDeleteTodo.bind(this);
  }
  handelDeleteTodo(index) {
    const { actions } = this.props;
    actions.DeleteTodo(index);
  }
  render() {
    const { todo } = this.props;
    const List = todo.get("List").toJS();
    // const  style = {{ textDecoration: 'line-through' }    }
    return (
      <div>
        <h2>Todo List:</h2>
        <ul>
          {List.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button
                  onClick={() => {
                    this.handelDeleteTodo(index);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
