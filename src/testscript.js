
export const render = (dataset) => {

    
    var w = 1200, h = 800, pad = 75;
    var svg = d3.select("#plot")
        .append("svg")
        .attr("height", h)
        .attr("width", w)
        .attr('color', 'black')
        .attr('background', 'mintcream')
    
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d.rank; })])
        .range([pad, w - pad])
        .nice();
    
    var yScale = d3.scaleLinear()
        .domain([6.5, 10])
        .range([h - pad, pad])
        .nice();
    
    var rScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d.score *2 + d.rank ; })])
        .range([1, 30]);
    
    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);
    
    var circ = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d.rank); })
        .attr("cy", function (d) { return yScale(d.score); })
        .attr("r", function (d) { return rScale(d.score*2 + d.rank); })
        .attr("fill", () => {
            return "hsl(" + Math.random() * 360 + ",100%,50%)";
        }).attr("opacity", 0.5);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - pad) + ")")
        
        .call(xAxis);
    
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + pad + ", 0)")
        .call(yAxis);

    
}