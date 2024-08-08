import { useEffect, useState } from "react";
import "./style.scss";
import Loader from "../../componants/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { GetDataAuthenticated } from "../../apis/getData";

interface Item {
  title: string;
  description: string;
  list: string[];
}

interface Iplayer {
  _id: string;
  name: string;
  video: string;
  title: string;
  info: Item[];
}

export default function Index() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState<Iplayer>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const response = await GetDataAuthenticated(`/users/player/${id}`);
      if (response?.status === "success") {
        setPlayers(response.data);
      } else if (response?.response?.status === 401) {
        return navigate("/error", {
          state: {
            message: "you are not logged in please login",
            type: "auth",
          },
        });
      } else {
        return navigate("/error", {
          state: {
            message: "some error occured please try again",
            type: "error",
          },
        });
      }

      setLoading(false);
    };

    getData();
  }, []);

  if (loading === true) {
    return <Loader />;
  }
  return (
    <>
      <div className="player-info ">
        <div className="player-video-con">
          <iframe
            src={players?.video}
            className="player-video"
            title="Fullscreen Iframe"
            allowFullScreen={true}
          ></iframe>
        </div>

        <div className="article-container">
          <h2 className="article-title">{players?.name}</h2>
          <div className="article-content">
            {players?.info.map((item, index: number) => {
              return (
                <div className="paragraph-container" key={index}>
                  {item.title && (
                    <h3 className="paragraph-title">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="paragraph-text">{item.description}</p>
                  )}

                  {item.list?.length != 0 &&
                    item.list?.map((listItem: string) => {
                      return (
                        <ul key={listItem}>
                          <li>{listItem}</li>
                        </ul>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
