import { useState, useEffect, useRef } from "react";
import { Button, Container } from "./styled";
import { Input } from "./styled";
export const AddTask = (props) => {
  const [title, setTitle] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: title,
    });

    setTitle("");
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add Your To-Do"
        value={title}
        onChange={handleChange}
        ref={inputRef}
      />
      <Button>Add To Do</Button>
    </Container>
  );
};
