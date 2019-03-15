
export const render = (dataset) => {

    
    // let dataset = [[5, 20, 30], [480, 90, 20], [250, 50, 100], [100, 33, 40], [330, 85, 60], [1000, 50, 500]];
    var w = 1000, h = 1000, pad = 50;
    var svg = d3.select("#plot")
        .append("svg")
        .attr("height", h)
        .attr("width", w)
        .attr('color', 'black')
    
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d.rank; })])
        .range([pad, w - pad])
        .nice();
    
    var yScale = d3.scaleLinear()
        .domain([6, 10])
        .range([h - pad, pad])
        .nice()
    
    var rScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return 10; })])
        .range([1, 30]);
    
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    var circ = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d.rank); })
        .attr("cy", function (d) { return yScale(d.score); })
        .attr("r", function (d) { return rScale(10); })
        .attr("fill", "blue").attr("opacity", 0.5);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - pad) + ")")
        .call(xAxis);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + pad + ", 0)")
        .call(yAxis);
}