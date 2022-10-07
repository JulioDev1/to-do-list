import { useState } from "react";
import { Button, Container, Title } from "./styled";
import { Input } from "./styled";
export const AddTask = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <Container>
      <Title>What are you doing to day ?</Title>
      <Input
        placeholder="add your to-do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        add to do
      </Button>
    </Container>
  );
};
