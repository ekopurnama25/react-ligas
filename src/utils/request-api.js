import axios from "axios";

export default axios.create({
    baseURL: "https://api-football-standings.azharimm.site",
    headers: {
        "Content-type": "application/json",
    }
});