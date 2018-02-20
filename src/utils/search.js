import axios from 'axios';
import config from './configure'
import querystring from 'querystring'

class SearchAPI {
  constructor(customOptions={}) {
    this.search = axios.create({...config, ...customOptions});
  }

  get(params) {
    return this.search.get(querystring.stringify(params))
  };

  makeRequest(params) {

  }
};

let search = new SearchAPI()

export default search
