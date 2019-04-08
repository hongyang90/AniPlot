const axios = require('axios');

export const getTopAnime = (id) => (
    axios({
        url: `/top/${id}`,
        method: 'get'
    })
);



export const getAnimeInfo = (id) => (
    axios({
        url: `anime/${id}`,
        method: 'get'
    })
);

