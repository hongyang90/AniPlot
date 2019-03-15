const axios = require('axios');

export const getTopAnime = (id) => (
    axios({
        url: `/top/${id}`,
        method: 'get'
    })
);



