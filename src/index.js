import fetchData from './fetchData';
import * as API from './api_util';
import {render} from './testscript';
import {render2} from './scriptfile';


document.addEventListener('DOMContentLoaded', async () => {

    const dataset = await fetchData();
    // render(dataset);
    render2(dataset);

});