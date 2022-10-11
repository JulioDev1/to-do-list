import { useState } from "react";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";
import {
  MainContainer,
  Title,
  Todolist,
  TaskListContainer,
  Divider,
} from "./styled";

export const ToDolist = () => {
  const [todos, setTodo] = useState([]);

  const handleAddTodo = (todo) => {
    if (!todo.text || /^\*s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodo(newTodos);
  };

  const handleEditTodo = (todoId, newValue) => {
    if (!newValue.text || /^\*s*$/.test(newValue.text)) {
      return;
    }

    setTodo((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodo(removeArr);
  };
  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.toCompleted = !todo.toCompleted;
      }
      return todo;
    });

    setTodo(updateTodo);
  };

  return (
    <MainContainer>
      <Title>What are you doing to day ?</Title>
      <AddTask onSubmit={handleAddTodo} />
      {todos.length > 0 && <Divider />}
      <TaskListContainer>
        <TaskList
          todos={todos}
          toCompleted={completeTodo}
          RemoveTodo={removeTodo}
          updateTodo={handleEditTodo}
        />
      </TaskListContainer>
    </MainContainer>
  );
};
