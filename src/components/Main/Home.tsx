import React from "react";
import styled from "styled-components";
import pp from "../images/pp.mp4";
import { AiOutlineSearch } from "react-icons/ai";
import AllBooks from "./AllBooks";

const Home = () => {
  return (
    <Cont>
      <War>
        <Back>
          <video src={pp} autoPlay loop controls></video>
        </Back>
        <Details>
          <But>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
            <button>experience</button>
          </But>
          <Main>
            <h1>There's is Magic When Surrounded By Books</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              est voluptatum hic ipsum nobis qui nam pariatur vero magni iste
              accusamus ipsa consequatur dolorum, sint eaque, expedita, libero
              impedit voluptate.
            </p>
          </Main>
          <Search>
            <Ic>
              <AiOutlineSearch />
            </Ic>
            <input placeholder="SEARCH FOR ANY BOOK"></input>
          </Search>
        </Details>
      </War>
      {/* <AllBooks /> */}
    </Cont>
  );
};
export default Home;
const Cont = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* background-color: red; */
  position: relative;
  /* flex-direction: column; */
`;
const War = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Back = styled.div`
  //   margin-top: 10px;
  width: 100%;
  height: 500px;
  ::before {
    content: "";
    position: absolute;
    background-color: #000000cb;
    width: 100%;
    height: 500px;
    // z-index: 99;
    outline: none;
    border: 0;
  }
  video {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;
const Details = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 99;
`;
const Search = styled.div`
  width: 650px;
  height: 80px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50px;
  display: flex;
  overflow: hidden;
  margin-top: -30px;
  input {
    width: 600px;
    height: 60px;
    outline: 0;
    border: 0;
    font-size: 20px;
  }
`;

const But = styled.div`
  display: flex;
  margin-bottom: 40px;
  button {
    background-color: black;
    color: white;
    padding: 15px 25px;
    margin: 0 10px;
  }
`;
const Main = styled.div`
  text-align: center;
  margin-top: -50px;
  h1 {
    color: white;
    font-size: 40px;
  }
  p {
    color: white;
  }
`;
const Ic = styled.div`
  font-size: 30px;
  margin-right: 10px;
  margin-left: 10px;
`;
