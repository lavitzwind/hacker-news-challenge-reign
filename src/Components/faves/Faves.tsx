import "./faves.css";
import dayjs from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";
import relativeTime from "dayjs/plugin/relativeTime";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavesProps } from "../../interfaces/favesProps";
import { News } from "../../interfaces/news";

dayjs.extend(relativeTime);

const Faves = ({ loader, tab, faves, setFaves }: FavesProps) => {
  return (
    <div
      className="favesContainer"
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
        <div className="favesWrapper">
          {faves.length > 0 ? (
            faves
              .filter(
                (item) =>
                  item.story_title !== null &&
                  item.author !== null &&
                  item.story_url !== null &&
                  item.created_at !== null
              )
              .map((elem, index) => (
                <div className="favesCard" key={index}>
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
                      <span className="timeStamps">
                        <AccessTimeIcon
                          style={{
                            color: "#655",
                            fontSize: "1.2rem",
                            marginRight: "-0.2rem",
                          }}
                        />
                        {dayjs(elem.created_at).fromNow()} by {elem.author}
                      </span>
                      <h2 className="titleFaves">{elem.story_title}</h2>
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
                        style={{
                          color: "red",
                          fontSize: "1.7rem",
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className="likedNewsListCard"
                      onClick={() => setFaves((prev: any) => [...prev, elem])}
                    >
                      <FavoriteBorderIcon
                        style={{
                          color: "red",
                          fontSize: "1.7rem",
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
                margin: "2rem 3rem 0 3rem",
                textAlign: "center",
              }}
            >
              You have not favorite news yet
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Faves;
