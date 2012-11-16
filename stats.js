var request = require('superagent');
var _ = require('lodash');

var repo = 'twitter/bootstrap';
var totalIssuesChecked = 100;

request.get('https://api.github.com/repos/' + repo + '/issues?state=closed&per_page=' + totalIssuesChecked, function(res){
  var issues = res.body;
  var totaltime = 0;
  _.each(issues, function (issue) {
    var time = new Date(issue.closed_at).getTime()*1 - new Date(issue.created_at).getTime()*1 ;
    totaltime += time;
  })
  var averageHours  = Math.round(totaltime/1000/issues.length / (60 * 60) * 100)/100;
  var averageDays = Math.round(averageHours / 24 * 100)/100;
  console.log('Average hours:', averageHours);
  console.log('Average days:', averageDays);
});