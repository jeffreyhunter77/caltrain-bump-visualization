/**
 * List the ids of sheets available from a published Google spreadsheet
 */

function usage() {
  console.error("usage: node list_sheets.js key");
  process.exit(-1);
}

if (process.argv.length != 3) usage();

var key = encodeURIComponent(process.argv[2]);
var result = '';

function display() {
  if (this.statusCode < 200 || this.statusCode >= 300) {
    console.error("Google returned status %s.\n\n%s\n", this.statusCode, result);
    process.exit(-1);
  }

  var data = JSON.parse(result);
  
  console.log("Title: %s", data.feed.title['$t']);

  data.feed.entry.forEach(function(entry) {
    var id = /\/([^\/]+)$/.exec(entry.id['$t'])[1];
    console.log('%s - %s', id, entry.title['$t']);
  });

}

require('https')
  .request('https://spreadsheets.google.com/feeds/worksheets/'+key+'/public/full?alt=json',
    function(res) {

      res.on('data', function(chunk) { result += chunk.toString('utf8'); });
      
      res.on('end', display.bind(res));
      
      res.on('error', function(err) {
        console.error(err.stack ? err.stack : err);
        process.exit(-1);
      });
      
    }
  )
  .end();
