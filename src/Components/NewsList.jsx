import styled from "styled-components";
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";
import relativeTime from "dayjs/plugin/relativeTime";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

dayjs.extend(relativeTime);

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

const NewsList = ({ dataNews, loader }) => {
  return (
    <Container>
      {loader ? (
        <CircularProgress
          style={{
            color: "#000",
            marginTop: "4rem",
          }}
        />
      ) : (
        <NewsWrapper>
          {dataNews?.hits ? (
            dataNews?.hits.map((item, index) => (
              <NewsCard key={index}>
                <TimeStamp>
                  <AccessTimeIcon
                    style={{
                      color: "#655",
                    }}
                  />
                  {dayjs(item.created_at).fromNow()} by {item.author}
                </TimeStamp>
                <Title>{item.story_title}</Title>
                <LikeCard>
                  <FavoriteBorderIcon
                    style={{
                      color: "red",
                      fontSize: "1.7rem",
                    }}
                  />
                </LikeCard>
              </NewsCard>
            ))
          ) : (
            <span
              style={{
                marginTop: "4rem",
              }}
            >
              You can start searching for news by selecting your topic.
            </span>
          )}
        </NewsWrapper>
      )}
    </Container>
  );
};

export default NewsList;
