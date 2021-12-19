import React, { useState, useEffect } from "react";
import { getLagues } from "../utils/api/actionLagues";
import { Link } from "react-router-dom";

const Home = ({ setFavorites, favorites }) => {
  const [ligas, setLigas] = useState();

  const handleFavorite = (value) => {
    const dataFavorites = favorites.filter((item) => {
      return item.id !== value.id;
    });
    setFavorites([...dataFavorites, value]);
  };

  useEffect(() => {
    const getDataLigas = async () => {
      const data = await getLagues();
      setLigas(data);
    };

    getDataLigas();
  }, []);

  return (
    <div className="d-flex justify-content-around flex-wrap container my-5">
      {ligas &&
        ligas.data.map((value) => {
          return (
            <div
              key={value.id}
              className="row row-cols-1 row-cols-md-3 g-4 my-1"
            >
              <div className="col">
                <div className="card" style={{ width: "15rem" }}>
                  <img
                    src={value.logos.light}
                    className="card-img-top"
                    style={{ widht: "10rem", height: "10rem" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.name}</h5>
                    <p className="card-text">INi</p>
                    <Link
                      to={`/detailligas/${value.id}`}
                      className="btn btn-primary"
                    >
                      Check Detail
                    </Link>
                    <button
                      onClick={() => handleFavorite(value)}
                      className="btn btn-danger"
                    >
                      Favorite Liga
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
