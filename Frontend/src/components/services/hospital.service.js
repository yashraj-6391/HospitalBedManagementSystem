import httpClient from './http-common';


const update = (data) => {
    return httpClient.put('', data);
  };

  export default {update}