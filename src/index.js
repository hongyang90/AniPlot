import fetchData from './fetchData';
import * as API from './api_util';
import {render} from './testscript';
import {render2} from './test2';

console.log('working');

document.addEventListener('DOMContentLoaded', async () => {

    const dataset = await fetchData();

    // console.log(dataset);

    // let data = [[5, 20, 30], [480, 90, 20]]
    // render(dataset);
    render2(dataset);
   


  

});