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
  height: 100%;
  margin-top: 8.25rem;
`;

const FavesWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const FavesCard = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 550px;
  height: 90px;
  border: solid 2px #ccc;
  border-radius: 6px;
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
  color: #000;
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
const Faves = ({ dataNews, loader, tab, faves }) => {
  return (
    <Container
      style={{
        display: tab === "faves" ? "flex" : "none",
      }}
    >
      {loader ? (
        <CircularProgress
          style={{
            color: "#000",
            marginTop: "4rem",
          }}
        />
      ) : (
        <FavesWrapper>
          {faves.length > 0 ? (
            faves
              .filter(
                (item) =>
                  item.story_title !== null &&
                  item.story_author !== null &&
                  item.story_url !== null &&
                  item.created_at !== null
              )
              .map((elem, index) => (
                <FavesCard key={index}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      width: "475px",
                      height: "90px",
                      padding: "20px 0 20px 25px",
                    }}
                  >
                    <a
                      href={elem.story_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <TimeStamp>
                        <AccessTimeIcon
                          style={{
                            color: "#655",
                            fontSize: "1.2rem",
                            marginRight: "-0.2rem",
                          }}
                        />
                        {dayjs(elem.created_at).fromNow()} by {elem.author}
                      </TimeStamp>
                      <Title>{elem.story_title}</Title>
                    </a>
                  </div>
                  <LikeCard>
                    <FavoriteBorderIcon
                      style={{
                        color: "red",
                        fontSize: "1.7rem",
                      }}
                    />
                  </LikeCard>
                </FavesCard>
              ))
          ) : (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30vh",
                marginTop: "3rem",
              }}
            >
              You have not favorite news yet
            </span>
          )}
        </FavesWrapper>
      )}
    </Container>
  );
};

export default Faves;
