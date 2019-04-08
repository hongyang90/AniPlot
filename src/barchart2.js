import { select, scaleLinear, scaleBand, extent, axisBottom, axisLeft, format, max } from 'd3';


export const barchart2 = (scores) => {
    const svg = select('#barchart');
    let numbers = Object.keys(scores);
    let values = Object.values(scores);

    numbers.forEach((el, idx) => {
        values[idx].score = parseInt(el);
    });

    console.log(values);

    const margin = 60;
    const width = +svg.attr('width') - 2 * margin;
    const height = +svg.attr('height') - 2 * margin;

    
    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

    const yScale = scaleLinear()
        .domain([0, max(values, function (d) { return d.percentage })])
        .range([height, 0]);

    chart.append('g')
        .call(d3.axisLeft(yScale));


    const xScale = d3.scaleBand()
        .domain(values.map((s) => s.score))
        .range([0, width])
        .padding(0.2);

    chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

    
    const barGroups = chart.selectAll()
        .data(values)
        .enter()
        .append('g');

    barGroups
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (g) => xScale(g.score))
        .attr('y', (g) => yScale(g.percentage))
        .attr('height', (g) => height - yScale(g.percentage))
        .attr('width', xScale.bandwidth())
        .on('mouseenter', function (actual, i) {
            d3.selectAll('.value')
                .attr('opacity', 0);

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (a) => xScale(a.score) - 5)
                .attr('width', xScale.bandwidth() + 10)

            const y = yScale(actual.percentage)

            chart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y)

            barGroups.append('text')
                .attr('class', 'divergence')
                .attr('x', (a) => xScale(a.score) + xScale.bandwidth() / 2)
                .attr('y', (a) => yScale(a.percentage) + 20)
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text((a, idx) => {
                    const divergence = (a.percentage - actual.percentage).toFixed(1)

                    let text = ''
                    if (divergence > 0) text += '+'
                    text += `${divergence}%`

                    return idx !== i ? text : '';
                });

        })
        .on('mouseleave', function () {
            d3.selectAll('.value')
                .attr('opacity', 1)

            d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 1)
                .attr('x', (a) => xScale(a.score))
                .attr('width', xScale.bandwidth())

            chart.selectAll('#limit').remove()
            chart.selectAll('.divergence').remove()
        })

    
    // chart.selectAll()
    //     .data(values)
    //     .enter()
    //     .append('rect')
    //     .attr('x', (s) => xScale(s.score))
    //     .attr('y', (s) => yScale(s.percentage))
    //     .attr('height', (s) => height - yScale(s.percentage))
    //     .attr('width', xScale.bandwidth());






    svg.append('text')
        .attr('x', -(height / 2) - margin)
        .attr('y', margin / 2.7)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Percentage of total votes');


    svg.append('text')
        .attr('x', width / 2 + margin)
        .attr('y', height + margin*1.7)
        .attr('text-anchor', 'middle')
        .text('Rating from 1-10');
    
    svg.append('text')
        .attr('class', 'title')
        .attr('x', width / 2 + margin)
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text('Show Rating Breakdown by Percentage');


};