export const AddTodo = value => {
  return {
    type: "ADD", //定義好action type 讓reducer判斷
    value: value
  };
};

export const DeleteTodo = index => {
  return {
    type: "DELETE", //定義好action type 讓reducer判斷
    index: index
  };
};
