var logger = require('./logger');
var request = require('superagent');
var _ = require('lodash');
var issues = exports;

issues.getInfo = function(repo, totalIssues) {
  var totalIssuesChecked = totalIssues | 50;
  request.get('https://api.github.com/repos/' + repo + '/issues?state=closed&per_page=' + totalIssuesChecked, function(res){
    var issues = res.body;
    var totaltime = 0;
    _.each(issues, function (issue) {
      var time = new Date(issue.closed_at).getTime()*1 - new Date(issue.created_at).getTime()*1 ;
      totaltime += time;
    })
    var averageHours  = Math.round(totaltime/1000/issues.length / (60 * 60) * 100)/100;
    var averageDays = Math.round(averageHours / 24 * 100)/100;
    var averageTime = averageDays < 1 ? averageHours + ' hours' : averageDays + ' days';
    logger.log({text: repo, type: 'heading'});
    logger.log({text: 'Average time taken to close issue: ' + averageTime });
  });
}