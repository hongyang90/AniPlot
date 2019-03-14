const axios = require('axios');

export const getTopAnime = (num) => (
    axios({
        url: `/backend/top/${num}`,
        method: 'get'
    })
);



