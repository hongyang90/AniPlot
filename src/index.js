import fetchData from './fetchData'
import * as API from './api_util';

console.log('working');

document.addEventListener('DOMContentLoaded', async () => {
    // const dataset = fetchData()


    let dataset = await fetchData();


    console.log(dataset);


    // API.getTopAnime(1);
    // let dataset = [
    //     [1,2],
    //     [45,6],
    //     [6,90]
    // ]

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