import axios from "../src/config/axios"
async function getFilmData(url) {
  return await axios.get(url)
    .then((apiData) => {
      return apiData.data.results
    })
}
export default getFilmData