    var dataEpoch = new Date("1/1/2015");
    var lastFetched = new Date("3/16/2015");
    var elapsedDays = Math.round((lastFetched.getTime() - dataEpoch.getTime()) / (1000 * 60 * 60 * 24));
    
    function maxStationBumps(station) {
      return bumps[station] ?
      d3.max(Object.keys(bumps[station]).map(function(train) {
          return Object.keys(bumps[station][train]).length;
        })) :
        0;
    }
    
    function maxBumps() {
      return d3.max(Object.keys(bumps).map(maxStationBumps));
    }
    
    function severities(station, train) {
      return bumps[station] && bumps[station][train] ?
        Object.keys(bumps[station][train]).map(function(dte) {
          return bumps[station][train][dte];
        }) :
        [0];
    }
    
    function maxStationSeverity(station) {
      return bumps[station] ?
        d3.max(Object.keys(bumps[station]).map(function(train) {
          return d3.mean(severities(station, train));
        })) :
        0;
    }
    
    function maxSeverity() {
      return d3.max(Object.keys(bumps).map(maxStationSeverity));
    }
    
    function bumpsPerDay(station, train) {
      return d3.sum(severities(station, train)) / elapsedDays;
    }
    
    function maxBumpsPerDay() {
      return d3.max(Object.keys(bumps).map(function(station) {
        return d3.max(Object.keys(bumps[station]).map(function(train) {
          return bumpsPerDay(station, train);
        }));
      }));
    }

    var bumpScale = d3.scale.linear()
      .domain([0, maxBumps()])
//      .range([45, 0]);
      .range([1, .5]);
    
    var severityScale = d3.scale.linear()
      .domain([0, maxSeverity()])
//      .range([1, .5]);
      .range([45, 0]);
    
    var bumpsPerDayScale = d3.scale.linear()
      .domain([0, maxBumpsPerDay()])
      .range([1, .5]);

    function stationData() {
      return stations.map(function(s, idx) { return {name: s, stationId: idx}; });
    }
    
    function updateTimeTable(target, trains, times) {

      function stopData(station) {
        return trains.map(function(train, trainIdx) {
          return { stationId: station.stationId,
                   trainId: trainIdx,
                   time: times[trainIdx][station.stationId] };
        });
      }
    
      function bumpCount(data) {
        return (bumps[stations[data.stationId]] &&
                bumps[stations[data.stationId]][trains[data.trainId]]) ?
          Object.keys(bumps[stations[data.stationId]][trains[data.trainId]]).length : 0;
      }
    
      function bumpSeverity(data) {
        return d3.mean(severities(stations[data.stationId], trains[data.trainId]));
      }

      function bumpColor(data) {
        if (data.time === false)
          return d3.rgb('#fff');
        else if (data.time === '-')
          return d3.rgb('#eee');
        else
          //return d3.hsl(severityScale(bumpSeverity(data)), 1, bumpScale(bumpCount(data)));
          return d3.hsl(0, 1,
            bumpsPerDayScale(bumpsPerDay(stations[data.stationId], trains[data.trainId])));
          //return d3.hsl(bumpScale(bumpCount(data)), 1, severityScale(bumpSeverity(data)));
      }
    
      function setStops(rows) {
        rows.selectAll('.stop').data(stopData)
        .enter().append('div')
          .attr('class', 'stop')
          .style('background-color', bumpColor)
          .text(function(d) { return d.time === false ? '\u00a0' : d.time; });
      }
      
      function header(row) {
        var $row = jQuery(row);
        trains.forEach(function(t) {
          jQuery('<div class="stop"></div>')
            .text(t)
            .appendTo($row);
        });
      }
  
      var sched = d3.select('.schedule'+target);
  
      var rows = sched.selectAll('li').data(stationData())
        .enter().append('li');
    
    
      rows.append('div')
        .attr('class', 'station')
        .text(function(d) { return d.name; });
    
      setStops(rows);
      
      header('.times'+target);

    }
    
    updateTimeTable('.northbound', nbTrains, nbTimes);
    updateTimeTable('.southbound', sbTrains, sbTimes);
    
    $('.schedule li').each(function(idx, elem) {
      $(elem).find('.stop').each(function(idx,stopElem) {
        if (parseInt(sbTrains[idx]) % 100 < 66 || parseInt(sbTrains[idx]) % 100 > 84)
          $(stopElem).hide();
      })
    });

    $('.times').each(function(idx, elem) {
      $(elem).find('.stop').each(function(idx,stopElem) {
        if (parseInt(sbTrains[idx]) % 100 < 66 || parseInt(sbTrains[idx]) % 100 > 84)
          $(stopElem).hide();
      })
    });
    
    $('.schedule.northbound li').each(function(idx, elem) {
      $(elem).remove();
      if (idx < 24)
        $('.schedule.northbound').prepend(elem);
    });
    
    Object.keys(bumps["Redwood City"]["269"]).forEach(function(dte) {
      if (dte === "2/24/2015") return;
      
      var li = $('<li></li>');
      li.text(dte.replace(/\/\d{4}\s*$/, '') + ' - ' + bumps["Redwood City"]["269"][dte] + " cyclists bumped");
      $('.tip').prepend(li);
    });
    
