import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
import { Button, Alert, CircularProgress } from "@mui/material";
import "../App.css";
import { todosAdd, updateTodo } from "../features/todosSlice";

const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const todosState = useSelector((state) => state.todosState);
  // const [todo, setTodo] = useState({
  //   task: "",
  //   isComplete: false,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo._id) {
      dispatch(updateTodo(todo));
    } else {
      const newTodo = {
        ...todo,
        date: new Date(),
      };
      // dispatch
    // alert(JSON.stringify(todo));
      dispatch(todosAdd(newTodo));
    }
    setTodo({
      task: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={todo.task}
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          {/* Add Task */}
          {todosState.addTodoStatus === "pending" ? (
            <CircularProgress size={24} color="secondary" />
          ): todo._id ? (
            "Update Task"
          ) : (
            "Add Task"
          )}
          {/* new or update accordingly */}
        </Button>

        {todosState.addTodoStatus === "rejected" ? (
          <Alert severity="error">{todosState.addTodoError}</Alert>
        ) : null}
        {todosState.addTodoStatus === "success" ? (
          <Alert severity="success">Task Added...</Alert>
        ) : null}

        {todosState.updateTodoStatus === "rejected" ? (
          <Alert severity="error">{todosState.updateTodoError}</Alert>
        ) : null}
        {todosState.updateTodoStatus === "success" ? (
          <Alert severity="success">Task Updated...</Alert>
        ) : null}

      </form>
    </>
  );
};
export default AddTodo;
