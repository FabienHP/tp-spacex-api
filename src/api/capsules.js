import axios from "axios"

export const getAllCapsules = async () => {
  return axios.get('https://api.spacexdata.com/v4/capsules')
    .then((res) => res.data)
    .catch((err) => err);
};
