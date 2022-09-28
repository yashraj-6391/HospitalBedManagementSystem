import httpClient from './httpCommon2';


const createEnquiry = (data) => {
    return httpClient.post('', data);
  };

  export default {createEnquiry}