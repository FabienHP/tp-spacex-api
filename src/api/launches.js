import axios from "axios"

export const getAllLaunches = async () => {
  return axios.get('https://api.spacexdata.com/v4/launches')
    .then((res) => res.data)
    .catch((err) => err);
};
