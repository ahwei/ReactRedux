import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AddTodo } from "../../actions";
import TodoHead from "../../components/TodoHead";

export default connect(
  state => ({
    todo: state.TodoReducer
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        AddTodo
      },
      dispatch
    )
  })
)(TodoHead);
