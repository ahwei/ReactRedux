import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DeleteTodo } from "../../actions";
import TodoBody from "../../components/TodoBody";

export default connect(
  state => ({
    todo: state.TodoReducer
  }),
  dispatch => ({
    actions: bindActionCreators(
      {
        DeleteTodo
      },
      dispatch
    )
  })
)(TodoBody);
