import axios from "../request-api";

export const getLagues = async () => {
  try {
    const req = await axios.get("/leagues");
    if (req) {
      const { data } = req;
      return data;
    }
    //return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDetailLigas = async (id) => {
  try {
    const req = await axios.get(`/leagues/${id}`);
    if (req) {
      const { data } = req;
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSeason = async (id) => {
  try {
    const req = await axios.get(`/leagues/${id}/seasons`);
    if (req) {
      const { data } = req;
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getStandings = async (id, params) => {
  try {
    const req = await axios.get(`/leagues/${id}/standings`, {
      params: { season: params },
    });
    if (req) {
      const { data } = req;
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
