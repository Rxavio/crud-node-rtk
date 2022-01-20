import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../features/todosSlice";
import "../App.css";

const ListTodos = ({ setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  const { todos } = todosState;

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);


  return (
    <div>
     <h2> You have {todos && todos.length} tasks </h2>
      <div>List of Tasks...</div>
    </div>
  );
};

export default ListTodos;
