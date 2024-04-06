import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});

// export const requestPhotos = async () => {
//   const { data } = await instance.get("?query=office&page=1&per_page=10&client_id=qgDWMHSBuJuIbWzSvNS7HLs87sJVCTDls08a59otbaw");

//   return data;
// };

export const requestPhotoesByQuery = async (query = "") => {
  const { data } = await instance.get(`?query=${query}&page=1&per_page=10&client_id=qgDWMHSBuJuIbWzSvNS7HLs87sJVCTDls08a59otbaw`);

  return data;
};
