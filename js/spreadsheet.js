/**
 * A class for working with bump data in a Google spreadsheet
 */
function BumpSpreadSheet(data) {
  this.data = data;
}

$.extend(BumpSpreadSheet.prototype, {
  
  /** Return the set of row data */
  rows: function() {
    return this.data.feed.entry;
  },
  
  /** The key used in the data for a given heading */
  _cellKey: function(heading) {
    return 'gsx$' + String(heading).replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
  },
  
  /** Return the data from a given cell address */
  cell: function(rowIdx, heading) {
    var row = this.rows()[rowIdx];
    
    if (!row) return;
    
    var cell = row[this._cellKey(heading)];
    
    return cell ? cell['$t'] : cell;
  },
  
  /** Determine if a report was likely tweeted */
  _wasTweeted: function(count, comments) {
    return ( (parseInt(count) == 1) &&
             (/^CAUTION: There may have been more than one bump! Transferred from Twitter/.test(comments)) );
  },
  
  /** Add a tweeted bump to the count */
  _addTweet: function(data) {
    if (!data.tweeted) data.tweeted = 0;
    ++data.tweeted;
  },
  
  /** Add a regular bump to the count */
  _addRegular: function(data, count) {
    data.bumps = Math.max(data.bumps ? data.bumps : 0, count);
  },
  
  /** Consolidate tweeted and regular bump reports */
  _consolidateBumps: function(bumps) {
    $.each(bumps, function(station, trains) {
      $.each(trains, function(train, dates) {
        $.each(Object.keys(dates), function(idx, date) {
          var bumps = dates[date];
          dates[date] = Math.max(bumps.bumps ? bumps.bumps : 0,
                                 bumps.tweeted ? bumps.tweeted : 0);
        });
      });
    });
    
    return bumps;
  },
  
  /** Return the summarized bump data from the spreadsheet */
  bumpData: function() {
    
    var bumps = {};
    var rowCount = this.rows().length;
    
    for (var i = 0; i < rowCount; ++i) {
      
      var date     = this.cell(i, 'Date of bicycle bump(s)');
      var count    = this.cell(i, 'Total number of bumped bikes');
      var station  = this.cell(i, 'Departure station');
      var train    = this.cell(i, 'Train number');
      var comments = this.cell(i, 'Comments');
      
      if (String(train).trim() != '') {
        if (!bumps[station]) bumps[station] = {};
        if (!bumps[station][train]) bumps[station][train] = {};
        if (!bumps[station][train][date]) bumps[station][train][date] = {};
        
        if (this._wasTweeted(count, comments))
          this._addTweet(bumps[station][train][date]);
        else
          this._addRegular(bumps[station][train][date], parseInt(count));
      }
      
    }
    
    return this._consolidateBumps(bumps);
    
  },
  
  /** Return the most recent bicycle bump date */
  mostRecentReportDate: function() {
    var maxDate = new Date("1/1/2015");
    var rowCount = this.rows().length;
    
    for (var i = 0; i < rowCount; ++i) {
      
      var date     = new Date(this.cell(i, 'Date of bicycle bump(s)'));
      var train    = this.cell(i, 'Train number');

      if (String(train).trim() != '' && date > maxDate)
        maxDate = date;
    }
    
    return maxDate;
  }
  
});

/**
 * Create a new spreadsheet by loading data from a URL
 */
BumpSpreadSheet.fromUrl = function(url, cb) {
  $.ajax({
    url: url,
    method: 'GET',
    cache: false,
    dataType: 'json',
    success: function(data) {
      cb(undefined, new BumpSpreadSheet(data));
    },
    error: function(xhr, status) {
      cb(new Error("Spreadsheet data retrieval failed with status "+status));
    }
  });
}
