import styled from "styled-components";
export const Container = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  gap: 8px;
  margin-top: 10px;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 26px 16px;
  background-color: #dee2e6;
  font-family: "Roboto", sans-serif;
`;
export const Button = styled.button`
  width: 30%;
  background-color: #788bff;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 26px 16px;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
`;
export const Title = styled.h1`
  font-family: "Playfair Display", serif;
  color: #495057;
`;
