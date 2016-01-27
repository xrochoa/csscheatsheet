var chart = d3.select('#chart'),
    color = d3.scale.category20c();


d3.csv('/res/css.csv', function(error, rows) {
    //console.log(rows);

    for (var i = 0; i < rows.length; i++) {
        //console.log(rows[i]);
        populate(rows[i]);
    };

});

function populate(data) {
    var row = chart.append('div')
        .attr('class', 'row')
        .style('background', function() {
            return color(data.Type);

        })
        .style('font-weight', function() {
            if (data.Shorthand === 'X' || data.Shorthand === '') {
                return '900';

            } else {
                return '200';
            }
        });

    row.append('div')
        .attr('class', 'col-xs-3 property')
        .html(function() {
            return '<a href="http://www.caniuse.com/#search=' + data.Property + '">' + data.Property + '</a>';
        });

    row.append('div')
        .attr('class', 'col-xs-4 description')
        .text(data.Description);

    row.append('div')
        .attr('class', 'col-xs-4 example')
        .text(data.Example);

    row.append('div')
        .attr('class', 'col-xs-1')
        .append('span')
        .attr('class', function() {
            return 'animatable big ' + data.Animatable;
        })
        .append('span')
        .attr('class', function() {
            return 'version small version-' + data.CSS;
        })
        .append('span')
        .attr('class', function() {
            if (data.Shorthand === 'X') {
                return 'shorthand circle smaller';
            }
        });
}