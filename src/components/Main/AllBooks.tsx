import React, { useEffect } from "react";
import styled from "styled-components";
import api from "../images/api.jpg";
import axios from "axios";

interface Books {
  author: string;
  coverImage: string;
  authorImage: string;
  category: string;
  title: string;
  _id: string;
}

const AllBooks = () => {
  const [BookData, setBookData] = React.useState<Books[]>([]);
  const getBook = async () => {
    await axios
      .get("https://newbook.onrender.com/getAll")
      .then((res) => {
        setBookData(res.data.data);
        console.log(res.data.data.covrImage);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <Cont>
      {BookData?.map((props) => (
        <BigCard key={props._id}>
          <Card>
            <Image src={props.coverImage}></Image>
            <Details>
              <Category>{props.category}</Category>
              <Title>{props.title}</Title>
            </Details>
          </Card>
          <DownPart>
            <Log>{props.authorImage}</Log>
            <Name>{props.author}</Name>
          </DownPart>
        </BigCard>
      ))}
    </Cont>
  );
};
export default AllBooks;
const Cont = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  /* height: 300px; */
  margin: 50px 50px;
  flex-wrap: wrap;
`;
const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  /* height: 300px; */
  margin: 50px 50px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  position: relative;
  overflow: hidden;
`;
const DownPart = styled.div`
  display: flex;
  /* justify-content: space-ar; */
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const Log = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 40px;
  color: white;
  font-weight: bold;
  background-color: red;
  text-align: center;
  margin-right: 10px;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  position: relative;
`;

const Category = styled.div`
  margin-top: 10px;
  background-color: #00000086;
  padding: 10px 25px;
  color: white;
  border-radius: 20px;
  width: 120px;
  display: flex;
  justify-content: center;
  z-index: 9;
  align-items: center;
`;
const Title = styled.div`
  margin-bottom: 30px;
  /* margin-left: 10px; */
  font-size: 25px;
  color: white;
  opacity: 0;
  width: 100%;
  height: 100%;
  align-items: flex-end;
  display: flex;
  position: absolute;
  transition: all 350ms;
  /* background-image: linear-gradient(170deg, #0000001e, #000000dc); */
  :hover {
    background-image: linear-gradient(170deg, #0000001e, #000000ac);
    opacity: 1;
    /* display: block; */
  }
`;
const Details = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  height: 100%;
  width: 100%;
  top: 0;
  overflow: hidden;
  /* opacity: 0; */
`;
