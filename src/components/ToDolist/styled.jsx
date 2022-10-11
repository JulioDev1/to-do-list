import styled from "styled-components";
export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Playfair Display", serif;
  color: #495057;
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  max-width: 520px;
`;
export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 16px;
`;
export const Divider = styled.hr`
  width: 40%;
  margin: 32px auto;
  opacity: 0.3;
  background-color: #495057;
  height: 3px;
  border-radius: 50%;
`;
