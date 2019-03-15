import d3Tip from 'd3-tip';


export const tip = d3Tip()
    .attr('class', 'tiptool')
    .offset([-10, 0])
    .html(d => {
        return "<div class='title'>" + `${d.title}` + "</div>"

    })

    