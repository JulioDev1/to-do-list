import { useState } from "react";

export function Tasklist({ todo, onChange, Delete }) {
  return {};
}
function Task({ todo, onChange, Delete }) {
  const [editing, setEditing] = useState(false);
  let toDocontent;
  if (editing) {
    toDocontent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => onChange({ ...todo, title: e.target.value })}
        />
        <button onClick={() => setEditing(false)}>save</button>
      </>
    );
  } else {
    toDocontent(
      <>
        {todo.title}
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }
}
