var request = require('superagent');
var _ = require('lodash');

request.get('https://api.github.com/repos/h5bp/html5-boilerplate/issues?state=closed&per_page=100', function(res){
  var totaltime = 0;
  _.each(res.body, function (issue) {
    var time = new Date(issue.closed_at).getTime()*1 - new Date(issue.created_at).getTime()*1 ;
    totaltime += time;
    console.log(time, new Date(issue.closed_at).getTime(), new Date(issue.created_at).getTime())
  })
  console.log(res.body.length)
  console.log(((totaltime/1000) / res.body.length) / (60*60*24), 'days');
});