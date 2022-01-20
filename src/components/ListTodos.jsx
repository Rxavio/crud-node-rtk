import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "../features/todosSlice";
import moment from "moment";
import { CircularProgress, Card } from "@mui/material";
import Button from "@mui/material/Button";
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
      {/* <div>List of Tasks...</div> */}
      {todosState.getTodosStatus === "pending" ? <CircularProgress /> : null}
      {todos.map((todo) => (
        <Card
          variant="outlined"
          sx={{
            padding: "0.7rem",
            marginBottom: "2rem",
          }}
          key={todo._id}
          >
          <h3>{todo.task}</h3>
          <p>Added: {moment(todo.date).fromNow()}</p>
         {/* Update */}
          <Button
            variant="outlined"
            size="small"
            onClick={() => setTodo({ ...todo })}
            sx={{
              fontFamily: "'Abel', 'sansSerif'",
            }}
          >
            Update
          </Button>
          {/* delete */}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              marginLeft: "0.7rem",
              fontFamily: "'Abel', 'sansSerif'",
            }}
            >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ListTodos;
