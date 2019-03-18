# AniPlot

[AniPlot Live Site](https://aniplot.herokuapp.com)

AniPlot is a personal javascript project using the D3 (Data Driven Documents) library. The website collects data using an external api and displays a plot comparing Anime shows based on ratings versus popularity. Users are able to hover over data points for brief information or click on the data point for additional information.

![Screen Shot 2019-03-17 at 5 19 51 PM](https://user-images.githubusercontent.com/44389539/54500327-ed20db00-48d8-11e9-8aa4-aaafb5310568.png)

## Technologies Used
* Javascript
* Data Driven Documents (D3) Library
* Node JS
* DOM Manipulation
* External APIs


## Highlighted Features

### Additional Info DOM Element

![Screen Shot 2019-03-17 at 5 28 20 PM](https://user-images.githubusercontent.com/44389539/54500453-1d1cae00-48da-11e9-9545-4e4fd2ae9edc.png)

This feature allows users to click on data points and will display detailed information about the selected show. This info content is displayed in the middle of the chart and all other data points are hidden. This was done by appending a new element to the DOM with the selected shows' information by adding an on click function to each 'circle' ie: data point.

```
   const handleClick = (d) => {
        tip.hide();
        d3.selectAll('circle')
            .style('visibility', 'hidden');
            
       select('.main')
        .append('div')
        .attr('class', 'info')
        .style('display', 'flex')
           .html(`<div class="infoimg"><img src=${d.image_url} alt=""></div>
            <div class='infotitle'>${d.title}</div>
            <div class="firstsub">
                <div class="type">
                    Anime Type:  ${d.type}
                </div>
                <div class="episodes">
                Episodes:  ${d.episodes}
                </div>
            </div>
            <div class="secondsub">
                <div class="startdate">
                    Airing Time: ${d.start_date} - ${d.end_date}
                </div>
              
            </div>
            <div class="inforank">Popularity Rank: ${d.rank}</div>
            <div class="infoscore">Rating: ${d.score}</div>
            <a href=${d.url}>More About This Show</a>

        
      `).style("background", () => {
          return "hsl(" + Math.random() * 360 + ",100%,45%)";
      }).transition().duration(200).delay(2)
        
    };

```


###
