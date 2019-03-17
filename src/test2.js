import {select, scaleLinear, extent, axisBottom, axisLeft, format} from 'd3';
import d3Tip from 'd3-tip';
// import {tip} from './tiptool';


export const render2 = (dataset) => {
    const svg = select('svg')
      

    const width = 1200;
    const height = 800;

    const xValue = d => d.rank;
    const xAxisLabel = 'Anime Popularity By Rank';

    const yValue = d => d.score;
    const circleRadius = 50;
    const yAxisLabel = 'Anime Overall Rating';

    const margin = {top: 75, right:150, bottom: 75, left: 100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d.rank; }) ])
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(dataset, yValue))
        .range([innerHeight, 0])
        .nice();
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const xAxis = axisBottom(xScale)
        // .tickSize(-innerHeight)
        // .tickPadding(15);

    const yAxis = axisLeft(yScale)
        // .tickSize(-innerWidth)
        // .tickPadding(10);

    const yAxisG = g.append('g').call(yAxis);

    // yAxisG.selectAll('.domain').remove();

    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -50)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);

    const xAxisG = g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`);

    // xAxisG.select('.domain').remove();

    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 50)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel);

    const rScale = scaleLinear()
        .domain(extent(dataset, function (d) { return (((d.score - 7) / 9.5) * 50) }))
        .range([15, 50]);


        

    const tip = d3Tip()
        .attr('class', 'tiptool')
        .offset([0, 0])
        .html( d => {
            return "<div class='content'><div class='tiptitle'>"+`${d.title}`+`</div><div class='image'><img src=${d.image_url}></div></div><div class='arrow'></div>`  ;
            
        });



    const handleClick = (d) => {
        tip.hide();
       
    }

    g.selectAll('circle')
        .data(dataset)
        .enter().append('circle')
        .attr('cy', d => yScale(yValue(d)))
        .attr('cx', d => xScale(xValue(d)))
        .attr('r', d => { return rScale((((d.score - 7) / 9.5) * 50)) })
        // .attr('r', d => { return 3*(((d.score - 7)/9.5)*25 + (1/d.rank)*25)})
        .attr("fill", () => {
            return "hsl(" + Math.random() * 360 + ",100%,40%)";
        }).attr("opacity", 0.6)
        .on('mouseover', function (d) {
            d3.selectAll('circle').style('opacity', 0.25)
            select(this).style('opacity', 1);
            tip.show(d, this);
        })
        .on('mouseout', function (d) {
            select(this).style('opacity', 0.6);
            d3.selectAll('circle').style('opacity', 0.6)
            tip.hide();
        })
        .on("click", handleClick)
        .call(tip);



        // TESTING CODE

    // g.selectAll('circle')
    //     .data(dataset)
    //     .enter().append('circle')
    //     .attr('cy', d => yScale(yValue(d)))
    //     .attr('cx', d => xScale(xValue(d)))
    //     .attr('r', d => { return rScale((((d.score - 7) / 9.5) * 50))})
    //     // .attr('r', d => { return 3*(((d.score - 7)/9.5)*25 + (1/d.rank)*25)})
    //     .attr("fill", () => {
    //         return "hsl(" + Math.random() * 360 + ",100%,40%)";
    //     }).attr("opacity", 0.6)
    //     .on('mouseenter',function (d) {
    //         d3.selectAll('circle').style('opacity', 0.25);
    //         let mynode = d3.select(this);
    //         mynode.style('opacity', 1);
    //         mynode.transition().duration(200).delay(100).attr('r', 125);
    //         mynode.append('text')
    //             .text(`${d.title}`)
    //         tip.show(d,this)
    //     })
    //     .on('mouseleave', function (d) {
    //         d3.select(this).transition().duration(200).delay(0).attr('r', d => { return rScale((((d.score - 7) / 9.5) * 50)) });
    //         d3.selectAll("circle").style('opacity', 0.6);
    //         tip.hide()
    //     })
    //     .call(tip)
        // .on('mouseover', function (d) {
        //     select(this).style('opacity', 1);
        //     tip.show(d, this)
        // })
        // .on('mouseout', function (d) {
        //     select(this).style('opacity', 0.6)
        //     tip.hide();
        // })
        // .call(tip);
 

};

