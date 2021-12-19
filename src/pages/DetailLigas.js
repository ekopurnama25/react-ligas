import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDetailLigas,
  getSeason,
  getStandings,
} from "../utils/api/actionLagues";

import { formatDate } from "../utils/formatDate";

const DetailLigas = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState();
  const [season, setSeason] = useState();
  const [standings, setStandings] = useState();
  const [params, setParams] = useState();

  const handleSeason = (event) => {
    setParams(event.target.value);
  };

  useEffect(() => {
    const LigasDetail = async () => {
      const detailLigas = await getDetailLigas(id);
      setDetail(detailLigas);
    };

    const SeasonDetail = async () => {
      const getSeasonDetail = await getSeason(id);
      setSeason(getSeasonDetail);
    };

    const StandingsLiga = async () => {
      const getStandingDetail = await getStandings(id, params);
      setStandings(getStandingDetail);
    };

    LigasDetail();
    SeasonDetail();
    StandingsLiga();
  }, [id, params]);

  return (
    <div className="d-flex justify-content-around flex-wrap container my-5">
      <div className="card mb-3">
        <div className="col">
          <div className="card">
            <img
              src={detail?.data.logos.light}
              className="card-img-top"
              alt="..."
              style={{ widht: "20rem", height: "20rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">{detail?.data.name}</h5>
              <p className="card-text">{detail?.data.slug}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around flex-wrap container my-5">
        <h5>Result Season</h5>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Season Name</th>
              <th>End Date</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {season?.data.seasons.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.displayName}</td>
                  <td>{formatDate(value.endDate)}</td>
                  <td>{formatDate(value.startDate)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-around flex-wrap container my-5">
        <h5>Result Standing</h5>
        <div>{standings?.data.abbreviation}</div>
        <div>{standings?.data.name}</div>
        <div>{standings?.data.season}</div>
        <div>{standings?.data.seasonDisplay}</div>
        <div className="my-2">
          <select
            className="form-select"
            onChange={(event) => handleSeason(event)}
            aria-label="Default select example"
          >
            <option value="">Seasons</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Club</th>
              <th>M</th>
              <th>M</th>
              <th>S</th>
              <th>K</th>
              <th>GM</th>
              <th>GA</th>
              <th>SG</th>
              <th>Poin</th>
            </tr>
          </thead>
          <tbody>
            {standings?.data.standings.map((value, index) => {
              return (
                <tr key={value.team.id}>
                  <td>{index + 1}</td>
                  <td>
                    {" "}
                    <img
                      src={value.team.logos[0].href}
                      alt=".."
                      style={{ width: "2rem" }}
                    />{" "}
                    {value.team.name}
                  </td>
                  <td>{value.stats[3].value}</td>
                  <td>{value.stats[0].value}</td>
                  <td>{value.stats[2].value}</td>
                  <td>{value.stats[1].value}</td>
                  <td>{value.stats[4].value}</td>
                  <td>{value.stats[5].value}</td>
                  <td>{value.stats[9].value}</td>
                  <td>{value.stats[6].value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailLigas;
