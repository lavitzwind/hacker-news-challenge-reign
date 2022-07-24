import "./newsList.css";
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";
import relativeTime from "dayjs/plugin/relativeTime";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

dayjs.extend(relativeTime);

const NewsList = ({ dataNews, loader, tab, setFaves, faves }) => {
  return (
    <div
      className="newsListContainer"
      style={{
        marginTop: dataNews > 0 ? "4rem" : "-4rem",
        display: tab === "all" ? "flex" : "none",
      }}
    >
      {loader === true && dataNews.length === 0 ? (
        <CircularProgress
          style={{
            color: "#000",
            marginTop: "4rem",
          }}
        />
      ) : (
        <div className="newsListWrapper">
          {dataNews.length > 0 ? (
            dataNews
              .filter(
                (item, index, self) =>
                  item.story_title !== null &&
                  item.author !== null &&
                  item.story_url !== null &&
                  item.created_at !== null
              )
              .map((elem, index) => (
                <div className="newsListCard" key={index}>
                  <div
                    className="newsListCardWrapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      width: "100%",
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
                      <span className="timeStamp">
                        <AccessTimeIcon
                          style={{
                            color: "#655",
                            fontSize: "1.2rem",
                            marginRight: "-0.2rem",
                          }}
                        />
                        {dayjs(elem.created_at).fromNow()} by {elem.author}
                      </span>
                      <h1 className="titleNewsList">{elem.story_title}</h1>
                    </a>
                  </div>
                  {faves.find((item) => item.parent_id === elem.parent_id) ? (
                    <div
                      className="likedNewsListCard"
                      onClick={() =>
                        setFaves(
                          faves.filter(
                            (item) => item.parent_id !== elem.parent_id
                          )
                        )
                      }
                    >
                      <FavoriteIcon
                        sx={{
                          color: "red",
                          fontSize: "1.7rem",
                          transition: "all 0.3s ease-in-out",

                          "&:hover": {
                            transform: "scale(1.1)",
                            transition: "all 0.3s ease-in-out",
                          },
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="likedNewsListCard"
                      onClick={() => setFaves((prev) => [...prev, elem])}
                    >
                      <FavoriteBorderIcon
                        sx={{
                          color: "red",
                          fontSize: "1.7rem",
                          transition: "all 0.3s ease-in-out",

                          "&:hover": {
                            transform: "scale(1.1)",
                            transition: "all 0.3s ease-in-out",
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              ))
          ) : (
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "30vh",
                margin: "3rem 2rem 0 0",
              }}
            >
              You can start searching for news by selecting your topic.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsList;
