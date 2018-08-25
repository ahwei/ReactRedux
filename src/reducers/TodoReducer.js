import { TodoState } from "../constants/models";

const TodoReducer = (state = TodoState, action) => {
  switch (action.type) {
    case "ADD":
      const List = state.get("List");
      state = state.set("List", List.push(action.value));
      return state;
    case "DELETE":
      const List_2 = state.get("List");
      state = state.set("List", List_2.delete(action.index));
      return state;
    default:
      return state;
  }
};
export default TodoReducer;
