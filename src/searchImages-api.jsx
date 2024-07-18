import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImageWithSearch = async (image, page = 1) => {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID _h0kEIZPGvdzLdUN5hcnliNvN3PwZMrmEJzZTyptuBg`,
    },
    params: {
      query: image,
      per_page: 10,
      page,
    },
  }); //
  return response.data.results;
};
