import { select, scaleLinear, scaleBand, extent, axisBottom, axisLeft, format, max } from 'd3';
import d3Tip from 'd3-tip';

export const renderBarchart = (scores) => {
    const svg = select('#barchart');
    let numbers = Object.keys(scores);
    let values = Object.values(scores);

    numbers.forEach((el,idx) => {
        values[idx].score = parseInt(el);
    });

    console.log(values);

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const xValue = d => d.percentage;
    const yValue = d => d.score;
    const margin = { top: 20, right: 40, bottom: 20, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = scaleLinear()
        .domain([0, max(values, function (d) {return d.percentage})])
        .range([0, innerWidth]);

    const yScale = scaleBand()
        .domain(values.map(yValue))
        .range([0, innerHeight])
        .padding(0.1);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('g').call(axisLeft(yScale));
    g.append('g').call(axisBottom(xScale))
        .attr('transform', `translate(0,${innerHeight})`);

    g.selectAll('rect').data(values)
        .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());


    


};