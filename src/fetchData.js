import * as API from './api_util';

 export default async function fetchData() {
    let data = [];


    let data1 = await API.getTopAnime(1).then(res => {
        //   a = res.data;
        return res.data
    })

     let data2 = await API.getTopAnime(2).then(res => {
         //   a = res.data;
         return res.data
     });
    
    // return data.concat(data1);
    return data.concat(data1, data2);
    
    
}

// module.exports.fetchData = fetchData;