import "./style.scss";
import { useNavigate, useParams } from "react-router-dom";
import { GetDataAuthenticated } from "../../apis/getData";
import Loader from "../../componants/Loader";
import { useEffect, useState } from "react";

interface Item {
  title: string;
  description: string;
  list: string[];
}

interface Inews {
  name: string;
  img: string;
  info: Item[];
}

export default function Index() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setIsloading] = useState(true);
  const [data, setData] = useState<Inews>();

  useEffect(() => {
    const getData = async () => {
      const response = await GetDataAuthenticated(`/users/news/${id}`);
      if (response?.status === "success") {
        setData(response.data);
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

      setIsloading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="news-info ">
        <div className="news-img-con">
          <img src={data?.img} className="news-img" />
        </div>

        <div className="article-container">
          <h2 className="article-title">{data?.name}</h2>
          <div className="article-content">
            {data?.info?.map((item: Item, index: number) => {
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
