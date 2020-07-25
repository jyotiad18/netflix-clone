const API_KEY = "";

const requests = {
  fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`  
};

export default requests;
