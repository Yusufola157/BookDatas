import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <Cont>
      <War>
        <Log to="/">Code-Lab</Log>
        <Upload>
          <Button to="/upload">Upload Book</Button>
        </Upload>
      </War>
    </Cont>
  );
};
export default Head;
const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #123456;
`;
const War = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
const Log = styled(Link)`
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 10px 0;
`;
const Upload = styled.div``;
const Button = styled(Link)`
  padding: 10px 15px;
  color: white;
  background-color: orange;
  border-radius: 10px;
  text-decoration: none;
  transition: all 350ms;
  :hover {
    scale: 1.2;
  }
`;
