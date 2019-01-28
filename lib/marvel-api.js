var axios = require('axios');

const marvelApiKey = `4e9f1ac102d21e2544e249194d8d04aa&hash=74907e55eb15635a25c8beb9aa629e70`;
// const idCharacter = `1009282`;
// const characterName = `Wolverine`;
class MarvelApi {

  constructor() {
    this.client = axios.create({
    });
  }
  handleResponse(response) {
    const responseData = response.data;
    if (responseData.error) {
      throw responseData.error;
    }
    return responseData || {};
  }
  handleRequestError(error) {
    console.error("Marvel API Error", error);
    throw error;
  }
  fetchComicsCharacters(characterName) {
    return this.client.get(`https://gateway.marvel.com/v1/public/characters?name=${characterName}&limit=15&ts=1&apikey=${marvelApiKey}`)

    // return this.client.get(`https://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=1&apikey=${marvelApiKey}`)
    // return this.client.get(`https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&apikey=${marvelApiKey}`)
    //return this.client.get(`https://gateway.marvel.com/v1/public/events/29/characters?ts=1&apikey=${marvelApiKey}`)
      .then((response) => {
        return this.handleResponse(response).data.results;
      })
      .catch((error) => {
        this.handleRequestError(error)
      });
  };
}
module.exports = MarvelApi;