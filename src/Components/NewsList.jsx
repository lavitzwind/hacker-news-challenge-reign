import styled from "styled-components";
import { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

const NewsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const NewsCard = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 550px;
  height: 90px;
  border: solid 2px #ccc;
  border-radius: 6px;
  padding: 20px 0 20px 25px;
  margin: 18px auto;
  transition: all 0.21s ease-in-out;

  &:hover {
    opacity: 0.4;
    cursor: pointer;
    transition: all 0.21s ease-in-out;
  }
`;

const TimeStamp = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: 300;
  gap: 8px;
  margin-bottom: 3px;
`;

const Title = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.25px;
  color: #6b6b6b;
  margin-left: 3px;
  width: 85%;
`;

const LikeCard = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 86.4px;
  border-radius: 0 6px 6px 0;
  background-color: #eee;
`;

const NewsList = () => {
  const [like, setLike] = useState();

  return (
    <Container>
      <NewsWrapper>
        <NewsCard>
          <TimeStamp>
            <AccessTimeIcon
              style={{
                color: "#655",
              }}
            />
            2 hours ago by author
          </TimeStamp>
          <Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            lorem lorem bumpo
          </Title>
          <LikeCard>
            <FavoriteBorderIcon
              style={{
                color: "red",
                fontSize: "1.7rem",
              }}
            />
          </LikeCard>
        </NewsCard>
        <NewsCard>
          <TimeStamp>
            <AccessTimeIcon
              style={{
                color: "#655",
              }}
            />
            2 hours ago by author
          </TimeStamp>
          <Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            lorem lorem bumpo
          </Title>
          <LikeCard>
            <FavoriteBorderIcon
              style={{
                color: "red",
                fontSize: "1.7rem",
              }}
            />
          </LikeCard>
        </NewsCard>
        <NewsCard>
          <TimeStamp>
            <AccessTimeIcon
              style={{
                color: "#655",
              }}
            />
            2 hours ago by author
          </TimeStamp>
          <Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            lorem lorem bumpo
          </Title>
          <LikeCard>
            <FavoriteBorderIcon
              style={{
                color: "red",
                fontSize: "1.7rem",
              }}
            />
          </LikeCard>
        </NewsCard>
        <NewsCard>
          <TimeStamp>
            <AccessTimeIcon
              style={{
                color: "#655",
              }}
            />
            2 hours ago by author
          </TimeStamp>
          <Title>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            lorem lorem bumpo
          </Title>
          <LikeCard>
            <FavoriteBorderIcon
              style={{
                color: "red",
                fontSize: "1.7rem",
              }}
            />
          </LikeCard>
        </NewsCard>
      </NewsWrapper>
    </Container>
  );
};

export default NewsList;
