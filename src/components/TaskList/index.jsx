import { useState } from "react";
import { Card, ContainerTask, EditTask, Icons } from "./styled";
import Trash from "../../icons/5358270771574330938-24.png";
import Edit from "../../icons/13217737781543238879-24.png";
import { AddTask } from "../AddTask";

export function TaskList({ todos, toCompleted, RemoveTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <AddTask edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Card key={index}>
      <div key={todo.id} onClick={() => toCompleted(todo.id)}>
        {todo.text}
      </div>

      <div>
        <Icons src={Trash} alt="delete" onClick={() => RemoveTodo(todo.id)} />
        <Icons
          src={Edit}
          alt="edit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </Card>
  ));
}
