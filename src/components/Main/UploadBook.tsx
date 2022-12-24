import React from "react";
import styled from "styled-components";

const Upload = () => {
  return (
    <Cont>
      <War>Upload Your Books</War>
    </Cont>
  );
};
export default Upload;
const Cont = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
`;
const War = styled.div`
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
