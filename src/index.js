import fetchData from './fetchData';
import * as API from './api_util';
import {render} from './testscript';

console.log('working');

document.addEventListener('DOMContentLoaded', async () => {

    const dataset = await fetchData();

    // console.log(dataset);

    // let data = [[5, 20, 30], [480, 90, 20]]
    render(dataset);
   

 

    // const w = 500;
    // const h = 500;

    // const svg = d3.select('body')
    //     .append('svg')
    //     .attr('width', w)
    //     .attr('height', h)

    // d3.selectAll('circle')
    // .data(dataset)
    // .enter()
    // .append('circle')
    // .attr('cx', (d) => d[0])
    // .attr('cy', (d) => h-d[1])
    // .attr('r', 5)


  

});