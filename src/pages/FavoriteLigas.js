import React from "react";

const FavoriteLigas = ({ favorites, setFavorites }) => {
  const handleDelete = (id) => {
    const delFavorites = favorites.filter((item) => {
      return item.id !== id;
    });
    setFavorites(delFavorites);
  };
  return (
    <div className="d-flex justify-content-around flex-wrap container my-5">
      {favorites &&
        favorites.map((value) => {
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
                  </div>
                  <button
                    onClick={() => handleDelete(value.id)}
                    className="btn btn-danger"
                  >
                    Delete Favorite
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FavoriteLigas;
